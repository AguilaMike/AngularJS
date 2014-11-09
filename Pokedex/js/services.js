(function() {
    var app = angular.module('pokedex.services', ['pokedex.filters']);

    app.factory('pokemonService', ['$http', '$q', '$filter', function($http, $q, $filter) {
        var normalize = $filter('normalize');

        function all () {
            var deferred = $q.defer();

            $http.get('./pokemons.json', { cache: true })
                .success(function(data) {
                    deferred.resolve(data);
                })

            return deferred.promise;
        }

        function byName(name) {
            var deferred = $q.defer();
            name = normalize(name);

            all().then(function(data) {
                var results = data.filter(function (pokemon) {
                    return (normalize(pokemon.name) === name);
                });

                if (results.length > 0) {
                    deferred.resolve(results[0]);
                }
                else {
                    deferred.reject();
                }
            });

            return deferred.promise;
        }

        return {
            all: all,
            byName: byName
        };
    }]);
}());
