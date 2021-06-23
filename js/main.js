const d = document,
    xhr = new XMLHttpRequest();

const obtenerPokemon = (url) => {
    const $frentePokemon = d.getElementById("frente-pokemon"),
        $detrasPokemon = d.getElementById("detras-pokemon"),
        $nombrePokemon = d.getElementById("nombre-pokemon");

    xhr.addEventListener("readystatechange", e => {
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300){
            infoPokemon = JSON.parse(xhr.responseText);
            console.log(infoPokemon);
            $frentePokemon
                .setAttribute("src", infoPokemon.sprites.front_default);
            $detrasPokemon
                .setAttribute("src", infoPokemon.sprites.back_default);
            $nombrePokemon.textContent = infoPokemon.name;
        }
    });
    xhr.open("GET", url);
    xhr.send();
}

d.addEventListener("DOMContentLoaded", e => {
    obtenerPokemon("https://pokeapi.co/api/v2/pokemon/8/");
});