class GameDetailsView {
    constructor() {
        const game = new GamesModel();

        const queryParams = location.search.split('/');
        const gameId = queryParams
            .find(param => param.includes('gameId='))
            .split('=')[1];

        console.log(gameId);

        this.game = game.findGameById(gameId);
    }

    async displayGame() {
        const article = document.querySelector('.js-game-details');
        article.append(await this.createHtml());
    }


    async createHtml() {
        const game = await this.game;

        const image = document.createElement('img');
        image.src = game.imageUrl;
        const title = document.createElement('h2');
        title.innerHTML = game.title;
        const description = document.createElement('p');
        description.innerHTML = game.description;

        const editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.classList.add('js-edite-btn');
        editBtn.setAttribute('js-game-id', game.id);

        const body = document.createElement('section');
        body.append(image, title, description, editBtn);

        return body;
    }
}

const view = new GameDetailsView();
view.displayGame();