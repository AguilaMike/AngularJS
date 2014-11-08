(function() {
    var app = angular.module('pokedex.filters', []);

    app.filter('imageify', [function () {
        /*
        *   Filtro para establecer las  imagenes de los pokemons
        *   Filter to set pokemons' images
        */
        return function (input, ext) {
            var url = "img/pokemons/" + input.toLowerCase() + "." + (ext || "jpg");
            return url;
        };
    }]);
}());
