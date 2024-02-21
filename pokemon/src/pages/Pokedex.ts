import "./style/Pokedex.css";

export const dataUrl = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const resp = await fetch(url);
    const data = resp.json();
    return data;
}


export const pokedex = async () => {

    const data = await dataUrl();
    const div = document.createElement('div');

    div.innerHTML = `
        <img id="pokelogo" src="./img/pokelogo.png"/>
        ${(await Promise.all(data.results.map(async (results: any) => {
            const url = await (await fetch(results.url)).json();
            return `
            <div id="card">
                <a href="/pokedex/${url.id}"><img id="pokeimg" src="${url.sprites.front_default}"/></a> 
            </div>`
            
        }))).join(' ')}
    `;

    return div;
}

