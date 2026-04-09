// 90-Day Plan module. Tasks persisted per-phase-index/task-index.
import { PHASES } from '../data/phases.js';
import { storage } from '../core/storage.js';

const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
const KEY = 'plan/tasks';

async function getSaved() { return (await storage.get(KEY, null)) || (await storage.legacyGet('mc_tasks', {})); }

function computePct(phaseIdx, saved) {
  const total = PHASES[phaseIdx].tasks.length;
  if (!total) return 0;
  const done = PHASES[phaseIdx].tasks.filter((_, ti) => saved[phaseIdx + '-' + ti]).length;
  return Math.round((done / total) * 100);
}

function renderPhases(saved) {
  return `<div class="phases-grid">${PHASES.map((phase, pi) => `
    <div class="phase-card ${phase.active ? 'active-phase' : ''}">
      <div class="phase-header">
        <div class="phase-name">${phase.name}: ${phase.subtitle}</div>
        <span class="phase-badge ${phase.active ? 'badge-active' : 'badge-upcoming'}">${phase.active ? 'Active' : 'Upcoming'}</span>
      </div>
      <div class="phase-dates">${phase.dates}</div>
      <div class="phase-progress"><div class="phase-progress-bar" id="progress-${pi}" style="width:${computePct(pi, saved)}%"></div></div>
      <ul class="task-list">
        ${phase.tasks.map((t, ti) => `
          <li class="task-item ${saved[pi + '-' + ti] ? 'done' : ''}" id="task-item-${pi}-${ti}">
            <input type="checkbox" data-pi="${pi}" data-ti="${ti}" ${saved[pi + '-' + ti] ? 'checked' : ''} />
            <span>${t}</span>
          </li>`).join('')}
      </ul>
    </div>`).join('')}</div>`;
}

function bindChecks(root) {
  root.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', async () => {
      const saved = await getSaved();
      const key = cb.dataset.pi + '-' + cb.dataset.ti;
      saved[key] = cb.checked;
      await storage.set(KEY, saved);
      const item = document.getElementById('task-item-' + key);
      if (item) item.classList.toggle('done', cb.checked);
      const bar = document.getElementById('progress-' + cb.dataset.pi);
      if (bar) bar.style.width = computePct(Number(cb.dataset.pi), saved) + '%';
    });
  });
}

export default {
  id: 'plan',
  title: '90-Day Plan',
  icon: ICON,
  showInSidebar: true,
  widgets: [
    {
      id: 'plan-widget',
      title: 'Active Phase',
      async render(el) {
        const saved = await getSaved();
        const active = PHASES.find(p => p.active) || PHASES[0];
        const idx = PHASES.indexOf(active);
        const pct = computePct(idx, saved);
        el.innerHTML = `
          <div class="card-title">${active.name} — ${active.subtitle}</div>
          <div class="phase-dates">${active.dates}</div>
          <div class="phase-progress" style="margin-top:10px"><div class="phase-progress-bar" style="width:${pct}%"></div></div>
          <p style="margin-top:10px;font-size:0.82rem;color:var(--text-dim)">${pct}% complete</p>`;
      },
    },
  ],
  async mount(el) {
    const saved = await getSaved();
    el.innerHTML = `<div class="card"><div class="card-title">90-Day Launch Plan</div>${renderPhases(saved)}</div>`;
    bindChecks(el);
  },
};
