define(['database/storage.provider'],
    function (storageProvider) {
        'use strict';
        class DataManager
        {
            constructor() {

            }

            getData() {
                return storageProvider.getAll();
            }

            insertData(item) {
                storageProvider.save(item.id, item, false);
            }

            deleteData(key) {
                storageProvider.remove(key);
            }

            reset() {
                storageProvider.clear();
            }
        }

        return DataManager;
    });