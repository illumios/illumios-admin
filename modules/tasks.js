// Tasks — placeholder until Pass 3.
const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';

export default {
  id: 'tasks',
  title: 'Tasks',
  icon: ICON,
  showInSidebar: true,
  mount(el) {
    el.innerHTML = `<div class="card"><div class="empty">
      <h3>Tasks</h3>
      <p>Coming in Pass 3. Shared + personal task lists with tags, due dates, and a "today" view.</p>
    </div></div>`;
  },
};
