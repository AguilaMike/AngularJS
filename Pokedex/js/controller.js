(function() {
    var app = angular.module('pokedex.controllers', ['pokedex.services']);

    app.controller('PokedexController', ['$scope', 'pokemonService', function($scope, pokemonService) {
        var pkms = $scope;
        pkms.pokemons = [];

        pokemonService.all()
            .then(function(data) {
                pkms.pokemons = data;
            });
    }]);

    app.controller('PokemonController', ['$scope', '$routeParams', 'pokemonService', function($scope, $routeParams, pokemonService) {
        var pkm = $scope;

        pkm.pokemon = {};

        pokemonService.byName($routeParams.name)
            .then(function(pokemon) {
                pkm.pokemon = pokemon;
            });
    }]);

    app.controller('TabsController', [function () {
        var tabs = this;

        tabs.tab = 1;

        tabs.onSelectTab = function (tab) {
            tabs.tab = tab;
        }

        tabs.isSelectTab = function (tab) {
            return tabs.tab === tab;
        }
    }]);

    app.controller('CommentsController', [function() {
        var comments = this;

        comments.comment = {};
        comments.comments = [];
        comments.visible = true;
        comments.message = '';

        comments.toggle = function() {
            comments.visible = !comments.visible;
        };

        comments.anonymousChanged = function() {
            if (comments.comment.anonymous) {
                comments.comment.email = '';
            }
        };

        comments.addComment = function(valid) {
            if (valid) {
                comments.comment.date = Date.now();
                comments.comments.push(comments.comment);
                comments.comment = {};
                comments.message = '';
            }
            else {
                comments.message = 'Comment Invalid';
            }
        };
    }]);
}());
