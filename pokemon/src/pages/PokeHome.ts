import "./style/pokeHome.css"


export const pokeHome = async () => {
    
    const pokeHome = document.createElement('div');

    pokeHome.innerHTML = `
    <img id="pokelogo" src="./img/pokelogo.png">

    <a href="/pokedex"><button id="pokedex" class="btn">Pokedex</button></a>
    `;

    return pokeHome;
}

