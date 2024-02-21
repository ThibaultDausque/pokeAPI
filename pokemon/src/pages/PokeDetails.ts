import "./style/PokeDetails.css";

function getID(urlString: any) {
    var url = new URL(urlString);
    const id = url.pathname.split("/").pop();
    return id;
}





export async function pokemonDetails() {
    const urlSelect = window.location.href;
    const id = getID(urlSelect);

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const results = await response.json();

    const details = document.createElement('div');
    details.innerHTML = `
        


        <img id="pokelogo" src="https://logo-marque.com/wp-content/uploads/2020/05/Pokemon-Logo.png">
        
        <div id="detailCard">

            <img id="imgDetails" src="${results.sprites.front_default}"/>
            <h3>${results.name}</h3>


            <div id="typeElement">
                <h4>Type</h4>
                ${(await Promise.all(results.types.map(async (data: any) => {
                    return `
                        <p id="pokeType">${data.type.name},</p>
                    `;
                }))).join(' ')}
            </div>

            <div id="abilitiesElement">
                <h4>Abilities</h4>
                ${(await Promise.all(results.abilities.map(async (pokeAbility: any) => {
                    return `
                        <p>${pokeAbility.ability.name},</p>
                    `;

                }))).join(' ')}
            </div>
        </div>

    `;

    //changer de pokemon par click
    const increment = details.querySelector("#detailCard");
    increment?.addEventListener('click', () => {
        let segments = url.split('/');
        let id = segments[segments.length - 1];
        console.log(id);
        let result = parseInt(id, 10) + 1;
        window.location.href = `http://localhost:5173/pokedex/${result}`;

        return result;

    })

    return details;
}


// card should present description, type, attack, defense, etct