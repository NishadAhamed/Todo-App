QUnit.config.autostart = false;
require({
    baseUrl: './'
}, [
    'Tests/fixtures/canary.test',
    'Tests/fixtures/model/todo.item.tests',
], function () {
    'use strict';
    
    QUnit.start();
});