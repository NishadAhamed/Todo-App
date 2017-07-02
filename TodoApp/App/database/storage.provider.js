define(function () {
	'use strict';

	class StorageProvider {
		constructor() {
			if (!this.isStorageAvailable()) {
				alert('Note: this browser does not support local storage');
			}
		}

		isStorageAvailable() {
			try {
				return 'localStorage' in window && window.localStorage !== null;
			} catch (e) {
				return false;
			}
		}

		remove(key) {
			try {
				localStorage.removeItem(key);
			} catch (ex) {
				throw new Error('Error while deleting data from the local storage for key: ' +
					key + '. Exception: ' + ex.message);
			}
		}

		save(key, value, isJson) {
			try {
				if (isJson) {
					localStorage.setItem(key, value);
				} else {
					localStorage.setItem(key, JSON.stringify(value));
				}
			} catch (ex) {
				if (ex.name === 'QUOTA_EXCEEDED_ERR' || ex.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
					throw new Error('Local storage quota has been exceeded: ' + ex.message);
				} else {
					throw new Error('Error while saving to the local storage. Error: ' +
						ex.message);
				}
			}
		}

		get(key) {
			try {
				return JSON.parse(localStorage.getItem(key));
			}
			catch (ex) {
				throw new Error('Error while fetching data from the local storage: ' +
					ex.message);
			}
		}

		getAll() {
			try {
				var items = [];
				if (!localStorage.length < 1) {
					for (var i = 0; i < localStorage.length; i++) {
						var item = JSON.parse(localStorage.getItem(localStorage.key(i)));
						items.push(item);
					}
				}
				return items;
			}
			catch (ex) {
				throw new Error('Error while fetching data from the local storage: ' +
					ex.message);
			}
		}

		clear() {
			try {
				localStorage.clear();
			}
			catch (ex) {
				throw new Error('Error while deleting all data from the local storage: ' +
					ex.message);
			}
		}
	}

	return new StorageProvider();
});
