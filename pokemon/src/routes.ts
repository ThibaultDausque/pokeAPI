import { pokeHome } from "./pages/PokeHome";
import { pokedex } from "./pages/Pokedex";
import { pokemonDetails } from "./pages/PokeDetails";

export async function getPath(Path: string) {

    if(Path === "/home") {
        return pokeHome();
    }

    if(Path === "/pokedex") {
        return pokedex();
    }

    if(Path.match(/\/pokedex\/\d+/)) {
        return pokemonDetails();
    }

    if(Path.match(/\/pokedex\/\w+/)) {
        return pokemonDetails();
    }



    const page = document.createElement('div');
    page.innerHTML = `Error 404: Page not found`;
    return page;

}