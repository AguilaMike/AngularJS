(function() {
    var app = angular.module('pokedex.routes', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: './views/pokedex.html',
            controller: 'PokedexController'
        })
        .when('/pokemon/:name', {
            templateUrl: './views/pokemon.html',
            controller: 'PokemonController',
            controllerAs: 'pkm'
        })
        .otherwise({
            redirectTo: '/'
        })
    }]);
}());
