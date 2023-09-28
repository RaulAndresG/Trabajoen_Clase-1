async function fetchFilmInfo() {
    try {
        const response = await fetch('https://swapi.dev/api/films/6/');
        const data = await response.json();

        const filmInfo = `
            <h2>${data.title}</h2>
            <p><strong>Director:</strong> ${data.director}</p>
            <p><strong>Productor:</strong> ${data.producer}</p>
            <p><strong>Fecha de lanzamiento:</strong> ${data.release_date}</p>
            <p><strong>Descripción:</strong> ${data.opening_crawl}</p>
        `;

        document.getElementById('film-info').innerHTML = filmInfo;
//--------------------------------------------------------------------------------


        const charactersList = document.getElementById('characters-list');
        const characters = data.characters;
        for (const characterURL of characters) {
            const characterResponse = await fetch(characterURL);
            const characterData = await characterResponse.json();

            const characterCard = `
                <div class="card">
                    <h2>${characterData.name}</h2>
                    <p><strong>Altura:</strong> ${characterData.height}</p>
                    <p><strong>Peso:</strong> ${characterData.mass}</p>
                    <p><strong>Color de pelo:</strong> ${characterData.hair_color}</p>
                </div>
            `;

            charactersList.innerHTML += characterCard;
        }
    } catch (error) {
        console.error( error);
    }
}

window.addEventListener('load', fetchFilmInfo);
