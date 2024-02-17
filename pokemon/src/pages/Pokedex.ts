import "./style/pokedex.css"

export const getPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const pokedex = async () => {
    const data = await getPokemon();
    const pokedex = document.createElement('div');

    pokedex.innerHTML = `
        <img id="pokelogo" src="./img/pokelogo.png">
        <input type="search" id="search" placeholder="Search for a Pokemon">
        <img id="searchlogo" src="./img/search.svg"/>
        ${(await Promise.all(data.results.map(async (pokemon: any) => {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.id || pokemon.name}`;
            const response = await fetch(url);
            const img = await response.json();
            return `
                <div class²="card">
                    <img src="${img.sprites.front_default}"/>
                    <h2>${pokemon.name}</h2>
                </div>
            `
        }))).join('')}
    `;


    return pokedex;
}

// card should present description, type, attack, defense, etc