(function() {
    var app = angular.module('pokedex.controllers', []);

    app.controller('PokedexController', ['$scope', '$http', function($scope, $http) {
        var pkms = $scope;
        pkms.pokemons = [];

        $http.get('./pokemons.json')
            .success(function(data) {
                pkms.pokemons = data;
            })
    }]);

    app.controller('PokemonController', [function() {
        var pkm = this;

        pkm.pokemon = {
            id: '001',
            name: 'Bulbasaur',
            species: 'Seed Pokémon',
            type: [ 'Grass', 'Poison' ],
            height: '2' + "'" + '4" (0.71 m)',
            weight: '15.2 lbs (6.9 kg)',
            abilities: [ 'Overgrow', 'Chlorophyll' ],
            stats: {
                hp: 45,
                attack: 49,
                defense: 49,
                "sp.atk": 65,
                "sp.def": 65,
                speed: 45,
                total: 318
            },
            evolution: [ 'Bulbasaur', 'Ivysaur', 'Venusaur' ]
        };
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
