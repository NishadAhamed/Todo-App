QUnit.config.autostart = false;
require({
    baseUrl: './'
}, [
    'Tests/fixtures/canary.test',
    'Tests/fixtures/model/todo.item.tests',
    'Tests/fixtures/database/data.manager.tests',
    'Tests/fixtures/helpers/common.helper.tests',
    'Tests/fixtures/viewmodels/home.base.tests',

], function () {
    'use strict';
    
    QUnit.start();
});