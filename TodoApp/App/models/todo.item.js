define([],
    function () {
        'use strict';
        class TodoItem {

            constructor (id, name, isDone, isDeleted)
            {
                this.id = id;
                this.name = name;
                this.isDone = isDone;
                this.isDeleted = isDeleted;
            }

            set id (id) {
                this._id = id;
            }
            get id () {
                return this._id;
            }

            set name (name) {
                this._name = name;
            }
            get name () {
                return this._name;
            }

            set isDone (isDone) {
                this._isDone = isDone;
            }
            get isDone () {
                return this._isDone;
            }

            set isDeleted (isDeleted) {
                this._isDeleted = isDeleted;
            }
            get isDeleted () {
                return this._isDeleted;
            }

            toJSON() {
                return {
                    id: this.id,
                    name: this.name,
                    isDone: this.isDone,
                    isDeleted: this.isDeleted
                }
            }
        }
        
        return TodoItem;
});