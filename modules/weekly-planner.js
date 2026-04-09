// Weekly Planner — placeholder until Pass 3.
const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';

export default {
  id: 'weekly',
  title: 'Weekly Planner',
  icon: ICON,
  showInSidebar: true,
  mount(el) {
    el.innerHTML = `<div class="card"><div class="empty">
      <h3>Weekly Planner</h3>
      <p>Coming in Pass 3. This will be your Mon–Sun view with top-3 priorities, carry-forward, and recurring items.</p>
    </div></div>`;
  },
};
