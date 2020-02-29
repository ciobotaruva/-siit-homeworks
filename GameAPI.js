const apiUrl = ('https://games-world.herokuapp.com/games');

async function getGamesData() {
    const response = await fetch(apiUrl);
    const games = await response.json();
    displayGames(games);
}

function displayGames(games) {
    const fragment = document.createDocumentFragment();
    for (const game of games) {
        const generateHtml = createHtml(game);
        fragment.append(generateHtml);
    }
    document.body.append(fragment);
}


//Old code
// function createHtml(game) {
//     const gameWrapper = document.createElement('article');

//     //create the html elements
//     const image = document.createElement('img');
//     const title = document.createElement('h3');
//     const description = document.createElement('p');
//     const deleteBtn = document.createElement('button');


//     //insert the content in the html

//     image.src = game.imageUrl;
//     title.innerHTML = game.title;
//     description.innerHTML = game.description;

//     gameWrapper.classList.add('all-games');


//     gameWrapper.append(image, title, description);
//     return gameWrapper;

// }



// getGamesData();


