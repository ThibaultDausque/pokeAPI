import { pokeHome } from "./pages/PokeHome";
import { pokedex } from "./pages/Pokedex";

export async function getPath(Path: string) {

    if(Path === "/home") {
        return pokeHome();
    }

    if(Path === "/pokedex") {
        return pokedex();
    }

    const page = document.createElement('div');
    page.innerHTML = `Error 404: Page not found`;
    return page;

}