// Storage abstraction.
// Pass 1: localStorage. Pass 2: swap this file for a GitHub-backed adapter
// with the same async API so no module code has to change.

const PREFIX = 'mc:';

export const storage = {
  async get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(PREFIX + key);
      return raw == null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
  async set(key, value) {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  },
  async remove(key) {
    localStorage.removeItem(PREFIX + key);
  },
  // Back-compat: read values the legacy dashboard wrote directly to localStorage.
  legacyGet(rawKey, fallback = null) {
    try {
      const raw = localStorage.getItem(rawKey);
      return raw == null ? fallback : JSON.parse(raw);
    } catch {
      return fallback;
    }
  },
};
