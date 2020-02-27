async function getGamesData() {
    const response = await fetch('https://games-world.herokuapp.com/games');
    const games = await response.json();



    for (const game of games) {
        const gameImg = document.createElement('img');
        const gameTitle = document.createElement('h4');
        const gameDescription = document.createElement('p');
        const gameSelector = document.querySelector('.all-games');
        gameImg.src = game.imageUrl;
        gameTitle.innerHTML = game.title;
        gameDescription.innerHTML = game.description;
        gameSelector.append(gameImg);
        gameSelector.append(gameTitle);
        gameSelector.append(gameDescription);
    }
}

getGamesData();

