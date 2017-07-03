define(['database/data.manager',
        'database/storage.provider',
        'underscore'],
    function (DataManager,
        storageProvider) {
        'use strict';
        
        let stubs = new Object();
        let dataManager;
        module('Data Manager test', {
            setup: function () {
                stubs.getAll = sinon.stub(storageProvider, 'getAll');
                stubs.save = sinon.stub(storageProvider, 'save');
                stubs.clear = sinon.stub(storageProvider, 'clear');
                stubs.remove = sinon.stub(storageProvider, 'remove');
                dataManager = new DataManager();
            },
            teardown: function () {
                _.each(stubs, function (stub) {
                    stub.restore();
                });
            }
        });

        test('Data Manager Get Data test', function () {
            dataManager.getData();
            ok(stubs.getAll.called, 'Data Manager Get Data test passed');
        });

        test('Data Manager Insert Data test', function () {
            dataManager.insertData({id: 1});
            ok(stubs.save.called, 'Data Manager Save Data test passed');
        });

        test('Data Manager reset Data test', function () {
            dataManager.reset();
            ok(stubs.clear.called, 'Data Manager reset Data test passed');
        });

        test('Data Manager Delete Data test', function () {
            dataManager.deleteData(1);
            ok(stubs.remove.called, 'Data Manager Delete Data test passed');
        });
    });