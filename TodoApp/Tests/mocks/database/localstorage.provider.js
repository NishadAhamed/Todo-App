define(function LocalStorageProviderMock() {
    'use strict';

    var localStore = {};

    function removeFromLocalStorage(key) {
        try {
            delete localStore[key];
        } catch (ex) {
            throw new Error('Error while deleting data from the local storage for key: ' + key + '. Exception: ' + ex.message);
        }
    }

    function saveToLocalStorage(key, value, isJson) {
        try {
            localStore[key] = isJson ? value : JSON.stringify(value);
        } catch (ex) {
            throw new Error('Error while saving to the local storage with the following error: ' + ex.message);
        }
    }

    function getFromLocalStorage(key) {
        try {
            if (localStore.hasOwnProperty(key)) {
                return JSON.parse(localStore[key]);
            } else {
                return null;
            }
        }
        catch (ex) {
            throw new Error('Error while fetching data from the local storage: ' + ex.message);
        }
    }

    function clearAllDataFromStorage() {
        localStore = {};
    }

    //returns singleton
    return {
        save: saveToLocalStorage,
        get: getFromLocalStorage,
        remove: removeFromLocalStorage,
        clear: clearAllDataFromStorage
    };
});