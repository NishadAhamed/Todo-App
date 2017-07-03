define(['models/todo.item'],
    function (TodoItem) {
        'use strict';

        let todoItem;
        module('Todo Item model tests', {
            setup: function () {
                todoItem = new TodoItem(1, 'New', false, false);
            }
        });

        test('Todo item read test', function () {  
            ok(todoItem.id == 1, 'item id value passed');
            ok(todoItem.name == 'New', 'item name value passed');
            ok(!todoItem.isDone, 'item isDone value passed');
            ok(!todoItem.isDeleted, 'item isDeleted value passed');
        });

        test('Todo item write test', function () {
            todoItem.id = 2;
            todoItem.name = 'Updated';
            todoItem.isDone = true;
            todoItem.isDeleted = true;
            ok(todoItem.id == 2, 'item id value passed');
            ok(todoItem.name == 'Updated', 'item name value passed');
            ok(todoItem.isDone, 'item isDone value passed');
            ok(todoItem.isDeleted, 'item isDeleted value passed');
        });

        test('Todo Item JSON stringify test', function () {
            let jsonData = JSON.stringify(todoItem);
            let expected = {
                id: 1,
                name: 'New',
                isDone: false,
                isDeleted: false
            };
            deepEqual(expected, JSON.parse(jsonData), 'Todo Item JSON stringify test passed');
        });
});