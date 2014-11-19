(function() {
    var app = angular.module('pokedex.services', ['pokedex.filters']);

    app.factory('pokemonService', ['$http', '$q', '$filter', '$window', function($http, $q, $filter, $window) {
        var normalize = $filter('normalize');
        var localStorage = $window.localStorage;

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

        function bySearch(search, type) {
            var deferred = $q.defer(),
                search = normalize(search);

            if (type) {
                byType(type).then(function(data) {
                    var results = data;

                    if (search) {
                        results = data.filter(function(pokemon) {
                            return (normalize(pokemon.name).indexOf(search) !== -1);
                        });
                    }

                    deferred.resolve(results);
                });
            } else {
                all().then(function(data) {
                    var results = data;

                    if (search) {
                        results = data.filter(function(pokemon) {
                            return (normalize(pokemon.name).indexOf(search) !== -1);
                        });
                    }

                    deferred.resolve(results);
                });
            }

            return deferred.promise;
        }

        function byType(type) {
            var deferred = $q.defer(),
                type = normalize(type);

            all().then(function(data) {
                var results = data.filter(function(pokemon) {
                    return pokemon.type.some(function (t) {
                        return normalize(t) === type;
                    });
                });

                deferred.resolve(results);
            });

            return deferred.promise;
        }

        function saveComment(pokemon, comment) {
            var comments = getComments(pokemon);
            comments.push(comment);
            localStorage.setItem(pokemon, JSON.stringify(comments));
        }

        function getComments(pokemon) {
            var comments = localStorage.getItem(pokemon);

            if (!comments) {
                comments = [];
            } else {
                comments = JSON.parse(comments);
            }

            return comments;
        }

        return {
            all: all,
            byName: byName,
            bySearch: bySearch,
            byType: byType,
            saveComment: saveComment,
            getComments: getComments
        };
    }]);
}());