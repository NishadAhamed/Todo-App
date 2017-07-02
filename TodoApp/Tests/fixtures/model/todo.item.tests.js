define(['models/todo.item'],
    function (TodoItem) {
        'use strict';

        module('Todo Item');

        test('Todo item read test', function () {  
            let todoItem = new TodoItem(1, 'New', false, false);
            ok(todoItem.id == 1, 'item id value passed');
            ok(todoItem.name == 'New', 'item name value passed');
            ok(!todoItem.isDone, 'item isDone value passed');
            ok(!todoItem.isDeleted, 'item isDeleted value passed');
        });

        test('Todo item write test', function () {
            let todoItem = new TodoItem(1, 'New', false, false);
            todoItem.id = 2;
            todoItem.name = 'Updated';
            todoItem.isDone = true;
            todoItem.isDeleted = true;
            ok(todoItem.id == 2, 'item id value passed');
            ok(todoItem.name == 'Updated', 'item name value passed');
            ok(todoItem.isDone, 'item isDone value passed');
            ok(todoItem.isDeleted, 'item isDeleted value passed');
        });
});