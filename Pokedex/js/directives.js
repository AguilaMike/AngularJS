(function() {
    var app = angular.module('pokedex.directives', ['pokedex.controllers', 'pokedex.services']);

    app.directive('pokemonName', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-name.html'
        };
    }]);

    app.directive('pokemonImage', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-image.html'
        };
    }]);

    app.directive('pokemonData', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-data.html'
        };
    }]);

    app.directive('pokemonType', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-type.html'
        };
    }]);

    app.directive('pokemonStats', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-stats.html'
        };
    }]);

    app.directive('pokemonEvolution', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-evolution.html'
        };
    }]);

    app.directive('pokemonComments', ['pokemonService', function(pokemonService) {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-comments.html',
            scope: { name: '@name' },
            link: function(scope, element, attributes) {
                attributes.$observe('name', function (value) {
                    if (value) {
                        scope.name = value;
                        scope.comments = pokemonService.getComments(value);
                    }
                });
            },
            controller: 'CommentsController',
            controllerAs: 'cmt'
        };
    }]);
}());