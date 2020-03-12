class GamesModel {
    apiUrl = 'http://localhost:3000/games';

    getAllGames() {
        return fetch(this.apiUrl).then(res => res.json());
    }

    findGameById(id) {
        return fetch(`${this.apiUrl}/${id}`).then(res => res.json());
    }

    deleteGameById(id) {
        return fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }
}