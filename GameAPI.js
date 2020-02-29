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

function createHtml(game) {
    const gameWrapper = document.createElement('article');

    //create the html elements
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const deleteBtn = document.createElement('button');


    //insert the content in the html

    image.src = game.imageUrl;
    title.innerHTML = game.title;
    description.innerHTML = game.description;

    gameWrapper.classList.add('all-games');


    gameWrapper.append(image, title, description);
    return gameWrapper;

}
//Old code
// async function getGamesData() {
//     const response = await fetch('https://games-world.herokuapp.com/games');
//     const games = await response.json();



//     for (const game of games) {
//         const gameImg = document.createElement('img');
//         const gameTitle = document.createElement('h4');
//         const gameDescription = document.createElement('p');
//         const gameSelector = document.querySelector('.all-games');
//         gameImg.src = game.imageUrl;
//         gameTitle.innerHTML = game.title;
//         gameDescription.innerHTML = game.description;
//         gameSelector.append(gameImg);
//         gameSelector.append(gameTitle);
//         gameSelector.append(gameDescription);
//     }
// }

// getGamesData();

getGamesData();


