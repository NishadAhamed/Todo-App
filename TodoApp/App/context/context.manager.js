define(function () {
    'use strict';

    class ContextManager {
        constructor() {

        }

        set items (items){
            this._.items = items;
        }

        get items() {
            return this._items;
        }

        set newItem (item) {
            this._newItem = item;
        }
        get newItem() {
            return this._newItem;
        }
        set previousItem(item) {
            this._previousItem = item;
        }
        get previousItem() {
            return this._previousItem;
        }
    }

    return ContextManager;
});