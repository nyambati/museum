const storeSettings = (settings) => {
	let settingsString = JSON.stringify(settings);
	localStorage.setItem('settings', settingsString);
	return settings;
};

export function settings(settings = {}) {
	const storedSettings = localStorage.getItem('settings');
	if (!storedSettings) {
		// set settings and return
		return storeSettings(settings);
	}

	const passedSettings = JSON.parse(storedSettings);
	const mergedSettings = Object.assign({}, passedSettings, settings);
	return storeSettings(mergedSettings);
}
