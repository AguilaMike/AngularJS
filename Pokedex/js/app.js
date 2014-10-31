(function () {
    /*
    * Declaramos el modulo de AngularJS donde va a trabajar nuestra aplicacion.
    * We create the module of AngularJS where the application will work.
    */
    var app = angular.module('pokedex', []);
    
    /* Our controller PokemonController*/
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
}());