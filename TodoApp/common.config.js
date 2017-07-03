(function () {
    'use strict';

    require.config({
        paths: {
            knockout: '../../Scripts/knockout-3.4.2',
            jquery: '../../Scripts/jquery-3.2.1.min',
            underscore: '../../Scripts/underscore-min',
            bootstrap: '../../Scripts/bootstrap.min',
            database: '../database',
            context: '../context',
            helpers: '../helpers',
            models: '../models',
            viewmodels: '../viewmodels'
        }
    });
})();