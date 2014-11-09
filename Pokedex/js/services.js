(function() {
    var app = angular.module('pokedex.services', []);

    app.factory('pokemonService', ['$http', '$q', function($http, $q) {

        function all () {
            var deferred = $q.defer();

            $http.get('./pokemons.json')
                .success(function(data) {
                    deferred.resolve(data);
                })

            return deferred.promise;
        }

        return {
            all: all
        };
    }]);
}());
