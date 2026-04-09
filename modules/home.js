// Home module — status bar + user-selectable widget grid.
// Pass 1: renders a default widget layout. Pass 4 will add user customization.
import * as registry from '../core/registry.js';
import { storage } from '../core/storage.js';

const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>';

const DEFAULT_LAYOUT = ['plan-widget', 'daily-log-today', 'quick-links-widget'];
const LAYOUT_KEY = 'home/layout';

const GHL_TRIAL_END = new Date('2026-04-16T23:59:59');

function renderStatusBar() {
  const days = Math.max(0, Math.ceil((GHL_TRIAL_END - new Date()) / 86400000));
  return `
    <div class="status-bar">
      <div class="status-item">
        <div class="status-label">Website</div>
        <div class="status-value"><span class="dot dot-green"></span>Live</div>
      </div>
      <div class="status-item">
        <div class="status-label">GHL Trial</div>
        <div class="status-value"><span class="dot dot-yellow"></span>${days}d left</div>
      </div>
      <div class="status-item">
        <div class="status-label">Maya AI</div>
        <div class="status-value"><span class="dot dot-green"></span>Live</div>
      </div>
      <div class="status-item">
        <div class="status-label">A2P Brand</div>
        <div class="status-value"><span class="dot dot-green"></span>Approved</div>
      </div>
      <div class="status-item">
        <div class="status-label">A2P SMS</div>
        <div class="status-value"><span class="dot dot-yellow"></span>Pending Carrier</div>
      </div>
      <div class="status-item">
        <div class="status-label">Phase</div>
        <div class="status-value"><span class="dot dot-orange"></span>1 — Foundation</div>
      </div>
    </div>`;
}

export default {
  id: 'home',
  title: 'Home',
  icon: ICON,
  showInSidebar: true,
  async mount(el) {
    const layout = (await storage.get(LAYOUT_KEY, null)) || DEFAULT_LAYOUT;
    const widgets = registry.allWidgets();
    const byId = new Map(widgets.map(w => [w.id, w]));

    el.innerHTML = `
      ${renderStatusBar()}
      <div class="grid-2" id="home-grid"></div>
      <div class="card" style="margin-top:22px">
        <div class="card-title">Add Widgets</div>
        <p style="font-size:0.85rem;color:var(--text-dim);margin-bottom:14px">Home widget customization lands in Pass 4. Jump into any module via the sidebar.</p>
      </div>`;

    const grid = el.querySelector('#home-grid');
    for (const id of layout) {
      const w = byId.get(id);
      if (!w) continue;
      const card = document.createElement('div');
      card.className = 'card';
      grid.appendChild(card);
      try {
        await w.render(card, { navigate: (to) => { window.location.hash = '#/' + to; } });
      } catch (err) {
        card.innerHTML = `<div class="card-title">${w.title}</div><p style="color:var(--red)">Widget error: ${String(err)}</p>`;
      }
    }
  },
};
