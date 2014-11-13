(function() {
    var app = angular.module('pokedex.filters', []);

    app.filter('normalize', [function () {
        /*
        *   Filtro para normalizar el texto
        *   Filter by normalize words
        */
        return function(input) {
            if (!input) return '';

            input = input
                        .replace('♀', 'f')
                        .replace('♂', 'm')
                        .replace(/\W+/g, '');

            return input.toLowerCase();
        };
    }]);

    app.filter('imageify', ['$filter', function ($filter) {
        /*
        *   Filtro para establecer las  imagenes de los pokemons
        *   Filter to set pokemons' images
        */
        return function (input, ext) {
            var url = "img/pokemons/" + $filter('normalize')(input) + "." + (ext || "jpg");
            return url;
        };
    }]);
}());