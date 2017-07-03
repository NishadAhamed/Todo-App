require(['knockout',
        'viewmodels/home.base'],
    function (ko,
        HomeBaseViewModel) {
        'use strict';

        function HomeViewModel() {
            var self = this;          

        }

        HomeViewModel.prototype = new HomeBaseViewModel();
        HomeViewModel.prototype.constructor = HomeViewModel;

        $(document).ready(function () {
            var viewModel = new HomeViewModel();
            viewModel.loadData();
            ko.applyBindings(viewModel);
        });
});