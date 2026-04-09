// Daily Log module — per-day text entries, saved locally (Pass 1).
import { storage } from '../core/storage.js';

const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>';
const KEY = 'dailyLog/entries';

function today() { return new Date().toISOString().slice(0, 10); }
function fmtDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
}

async function getEntries() {
  const modern = await storage.get(KEY, null);
  if (modern) return modern;
  const legacy = await storage.legacyGet('mc_logs', {});
  return legacy || {};
}

let saveTimer = null;

function renderHistory(entries) {
  const days = Object.keys(entries).sort().reverse().slice(0, 7);
  if (!days.length) return '<p style="color:var(--text-dim);font-size:0.85rem">No previous entries.</p>';
  return days.map(d => `
    <div class="log-entry">
      <span class="log-date">${fmtDate(d)}</span>
      ${escapeHtml(entries[d])}
    </div>`).join('');
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

export default {
  id: 'daily-log',
  title: 'Daily Log',
  icon: ICON,
  showInSidebar: true,
  widgets: [
    {
      id: 'daily-log-today',
      title: "Today's Log",
      async render(el) {
        const entries = await getEntries();
        const todayText = entries[today()] || '';
        el.innerHTML = `
          <div class="card-title">Today's Log</div>
          <p style="color:var(--text-dim);font-size:0.85rem;min-height:3em">${todayText ? escapeHtml(todayText.slice(0, 160)) + (todayText.length > 160 ? '…' : '') : 'No entry yet.'}</p>
          <a href="#/daily-log" class="link-btn" style="display:inline-flex;margin-top:8px">Open Daily Log</a>`;
      },
    },
  ],
  async mount(el) {
    const entries = await getEntries();
    const current = entries[today()] || '';
    el.innerHTML = `
      <div class="card">
        <div class="card-title">Today — ${fmtDate(today())}</div>
        <textarea class="log-textarea" id="log-textarea" placeholder="What did you work on today? What's blocked? What's next?">${escapeHtml(current)}</textarea>
        <div class="log-actions">
          <button class="save-btn" id="save-btn">Save</button>
          <span class="autosave-indicator" id="autosave-label"></span>
        </div>
        <div class="log-history">
          <div class="log-history-title">Past 7 Days</div>
          <div id="log-entries">${renderHistory(entries)}</div>
        </div>
      </div>`;

    const ta = el.querySelector('#log-textarea');
    const label = el.querySelector('#autosave-label');
    const save = async (silent = false) => {
      const entries = await getEntries();
      entries[today()] = ta.value;
      await storage.set(KEY, entries);
      label.textContent = silent ? 'Autosaved' : 'Saved';
      el.querySelector('#log-entries').innerHTML = renderHistory(entries);
      setTimeout(() => { label.textContent = ''; }, 1800);
    };

    ta.addEventListener('input', () => {
      label.textContent = 'Saving…';
      clearTimeout(saveTimer);
      saveTimer = setTimeout(() => save(true), 900);
    });
    el.querySelector('#save-btn').addEventListener('click', () => save(false));
  },
};
