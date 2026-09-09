/**
 * SETTINGS.JS — Settings manager using localStorage (webapp mode)
 * 
 * EXPORTED:
 *   getSettings() → Promise
 *   updateSettings(partial) → Promise
 *   resetSettings() → Promise
 *   exportData() → Promise
 *   importData(data) → Promise
 *   clearAllData() → Promise
 */

const SETTINGS_KEY = 'vibe_check_settings';
const HISTORY_KEY = 'vibe_check_history';

const DEFAULT_SETTINGS = {
  aiEnabled: true,
  apiEndpoint: '',
  apiKey: '',
  model: 'gpt-oss-120b',
  defaultMode: 'ai',
  autoDetectStack: true,
  showTokenEfficiency: true,
  showBeforeAfter: true,
  compactMode: false,
  maxHistoryEntries: 100,
  exportFormat: 'json',
  theme: 'dark'
};

/**
 * Merges stored settings with defaults (handles missing keys gracefully).
 * @param {object} stored
 * @returns {object}
 */
function mergeSettings(stored) {
  if (!stored || typeof stored !== 'object') return { ...DEFAULT_SETTINGS };
  const merged = { ...DEFAULT_SETTINGS };
  for (const key in merged) {
    if (key in stored) merged[key] = stored[key];
  }
  return merged;
}

/**
 * Gets all settings, merged with defaults.
 * @returns {Promise<object>}
 */
async function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    const stored = raw ? JSON.parse(raw) : null;
    return mergeSettings(stored);
  } catch (error) {
    console.error('Storage error (getSettings):', error);
    return { ...DEFAULT_SETTINGS };
  }
}

/**
 * Updates settings with a partial object. Merges with existing.
 * @param {object} partial - Partial settings object
 * @returns {Promise<object>} The merged settings after update
 */
async function updateSettings(partial) {
  try {
    const current = await getSettings();
    const updated = { ...current, ...partial };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Storage error (updateSettings):', error);
    return { ...DEFAULT_SETTINGS };
  }
}

/**
 * Resets all settings to defaults.
 * @returns {Promise<void>}
 */
async function resetSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ ...DEFAULT_SETTINGS }));
  } catch (error) {
    console.error('Storage error (resetSettings):', error);
  }
}

/**
 * Exports all data (settings + history) as a JSON object.
 * @returns {Promise<object>}
 */
async function exportData() {
  try {
    const settings = await getSettings();
    const raw = localStorage.getItem(HISTORY_KEY);
    const history = raw ? JSON.parse(raw) : [];
    return {
      version: '1.0',
      exportedAt: Date.now(),
      settings: settings,
      history: history
    };
  } catch (error) {
    console.error('Storage error (exportData):', error);
    throw new Error('Failed to export data');
  }
}

/**
 * Validates and imports data.
 * @param {object} data - The imported data object
 * @returns {Promise<void>}
 */
async function importData(data) {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid import file: must be a JSON object');
  }
  if (!data.version) {
    throw new Error('Invalid import file: missing version field');
  }
  if (!data.settings || typeof data.settings !== 'object') {
    throw new Error('Invalid import file: missing or invalid settings');
  }
  if (!Array.isArray(data.history)) {
    throw new Error('Invalid import file: history must be an array');
  }
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(data.settings));
    localStorage.setItem(HISTORY_KEY, JSON.stringify(data.history));
  } catch (error) {
    console.error('Storage error (importData):', error);
    throw new Error('Failed to import data');
  }
}

/**
 * Clears all data (settings + history).
 * @returns {Promise<void>}
 */
async function clearAllData() {
  try {
    localStorage.removeItem(SETTINGS_KEY);
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Storage error (clearAllData):', error);
  }
}
