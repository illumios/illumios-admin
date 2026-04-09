// Module registry. Each module is an object with:
//   id, title, icon (SVG string), showInSidebar, mount(el, ctx), unmount?()
// Widgets (optional): an array of { id, title, render(el, ctx) } for Home.

const modules = new Map();

export function register(mod) {
  if (!mod || !mod.id) throw new Error('Module missing id');
  modules.set(mod.id, mod);
}

export function get(id) {
  return modules.get(id);
}

export function all() {
  return Array.from(modules.values());
}

export function sidebarModules() {
  return all().filter((m) => m.showInSidebar !== false);
}

export function allWidgets() {
  const out = [];
  for (const m of modules.values()) {
    if (Array.isArray(m.widgets)) {
      for (const w of m.widgets) {
        out.push({ ...w, moduleId: m.id });
      }
    }
  }
  return out;
}
