// Living Business Plan — placeholder until Pass 3.
const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>';

export default {
  id: 'business-plan',
  title: 'Business Plan',
  icon: ICON,
  showInSidebar: true,
  mount(el) {
    el.innerHTML = `<div class="card"><div class="empty">
      <h3>Living Business Plan</h3>
      <p>Coming in Pass 3. Markdown-based, side-by-side edit + render, auto-synced between you and Sunshine.</p>
    </div></div>`;
  },
};
