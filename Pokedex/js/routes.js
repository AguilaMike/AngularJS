(function() {
    var app = angular.module('pokedex.routes', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: './views/pokedex.html'
        })
        .when('/pokemon/:id', {
            templateUrl: './views/pokemon.html',
            controller: 'PokemonController',
            controllerAs: 'pkm'
        })
    }]);
}());
