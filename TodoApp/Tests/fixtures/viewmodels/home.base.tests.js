define(['viewmodels/home.base',
    'database/data.manager'],
    function (HomeBaseViewModel,
        DataManager) {
        'use strict';

        var stubs = new Object();
        module('Todo View Model tests', {
            setup: function () {
                stubs.getData = sinon.stub(DataManager.prototype, 'getData').returns([{ id: 1, name: 'New', isDone: false, isDeleted: false }]);
                stubs.insertData = sinon.stub(DataManager.prototype, 'insertData');
                stubs.deleteData = sinon.stub(DataManager.prototype, 'deleteData');
                stubs.resetData = sinon.stub(DataManager.prototype, 'reset');
            },
            teardown: function () {
                stubs.getData.restore();
                stubs.insertData.restore();
                stubs.deleteData.restore();
                stubs.resetData.restore();
            }
        });

        test('Todo View Model load test', function () {
            //Arrange
            let homeViewModel = new HomeBaseViewModel();

            //Act
            homeViewModel.loadData();

            //Assert
            ok(homeViewModel.tasks().length === 1, 'Todo View Model load test passed');
        });

        test('Todo View Model Add Task test', function () {
            //Arrange
            let homeViewModel = new HomeBaseViewModel();
            homeViewModel.newTask('New');

            //Act
            homeViewModel.addTask();

            //Assert
            ok(homeViewModel.tasks().length === 1, 'Todo View Model load test passed');
            ok(homeViewModel.tasks()[0].name === 'New', 'Todo View Model add Task test passed');
        });

        test('Todo View Model Delete Task test', function () {
            //Arrange
            let homeViewModel = new HomeBaseViewModel();
            homeViewModel.newTask('New');

            //Act
            homeViewModel.addTask();
            homeViewModel.deleteTask(homeViewModel.tasks()[0]);

            //Assert
            ok(homeViewModel.tasks().length === 0, 'Todo View Model delete test passed');

        });

        test('Todo View Model Reset Task test', function () {
            //Arrange
            let homeViewModel = new HomeBaseViewModel();
            homeViewModel.newTask('New');

            //Act
            homeViewModel.addTask();
            homeViewModel.reset();

            //Assert
            ok(homeViewModel.tasks().length === 0, 'Todo View Model reset test passed');
        });

});