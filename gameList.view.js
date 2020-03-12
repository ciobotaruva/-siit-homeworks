class GameListView {

    constructor() {
        const model = new GamesModel();
        this.games = model.getAllGames();

        //Cand activez aceasta linie de cod se fac foarte multe refreshuri si nu stiu ce sa fac mai departe
        // this.delGame = model.deleteGameById();


    }

    async gameList() {
        const fragment = document.createDocumentFragment();

        for (const game of await this.games) {
            const createHtml = this.createGameHtml(game);
            const buttons = this.createButtons(game);
            fragment.append(createHtml);
            fragment.append(buttons);
        }
        document.querySelector('.js-games-list').append(fragment);
    }

    createGameHtml(game) {
        const p = document.createElement('p');
        const a = document.createElement('a');

        a.innerHTML = game.title;
        a.href = '/gameDetails.html?gameId=' + game.id;
        p.append(a);

        return p;
    }


    createButtons(game) {
        const btnWrapper = document.createElement('div');

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete Game'
        deleteBtn.classList.add('.js-delete-btn');
        deleteBtn.setAttribute('js-game-id', game.id);
        btnWrapper.append(deleteBtn);
        return btnWrapper;
    }


}


const view = new GameListView();
view.gameList();


