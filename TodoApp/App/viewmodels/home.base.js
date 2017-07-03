define(['jquery',
        'knockout',
        'context/context.manager',
        'database/data.manager',
        'helpers/common.helper',
        'models/todo.item'],
    function ($, ko,
        ContextManager,
        DataManager,
        CommonHelper,
        TodoItem) {
        'use strict';

        function HomeBaseViewModel() {
            var self = this;
            self.newTask = ko.observable();
            self.tasks = ko.observableArray([]);
            self.contextManager = new ContextManager();
            self.dataManager = new DataManager();


            self.loadData = function () {
                var items = self.dataManager.getData();
                for (let item of items) {
                    self.tasks.push(item);
                }
            };

            self.addTask = function () {
                if (self.newTask().trim() !== '') {
                    let newTaskItem = new TodoItem(CommonHelper.guid(), self.newTask(), false, false);
                    self.dataManager.insertData(newTaskItem);
                    newTaskItem.isDone = ko.observable(newTaskItem.isDone);
                    self.tasks.push(newTaskItem);
                    self.newTask('');
                }
                return false;
            };

            self.deleteTask = function (task) {
                task.isDeleted = true;
                self.tasks.remove(function (item) {
                    return item.id === task.id;
                })
                self.dataManager.deleteData(task.id);
            };

            self.reset = function () {
                self.dataManager.reset();
                self.tasks([]);
            };

        }

        return HomeBaseViewModel;
    });