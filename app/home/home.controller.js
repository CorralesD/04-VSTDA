(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;

        vm.posts = [];

        vm.addPost = addPost;

        var colorTag = {
            1: 'list-group-item-info',
            2: 'list-group-item-warning',
            3: 'list-group-item-danger'
        };

        var sortTypes = ['text', 'priority', '-priority'];

        ////////////////

        function addPost() {
            if (vm.newPriority) {
           vm.posts.push({
                    text: vm.newPost,
                    priority: vm.newPriority
                });
            } else {
                alert('what is the priority?');
            }
        };

        vm.getClass = function(color) {
            return colorTag[color];
        }

        vm.sort = function(order) {

            vm.sortPosts = sortTypes[order];
        }
    }

    
})();
