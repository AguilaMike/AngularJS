(function() {
    var app = angular.module('pokedex.directives', ['pokedex.controllers']);

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

    app.directive('pokemonComments', [function() {
        return {
            restrict: 'E',
            templateUrl: './partials/pokemon-comments.html',
            controller: 'CommentsController',
            controllerAs: 'cmt'
        };
    }]);
}());
