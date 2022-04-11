class Statistics {
	constructor() {
		this.gameResults = [];
	}

	//dodaje obiekt do tablicy gameResults
	addGameStatistics(win, bid) {
		let gameResult = {
			win,
			bid,
		};
		// console.log(gameResult);
		this.gameResults.push(gameResult);
	}

	//wyświetlanie ststystyki gry
	showGameStatistics() {
		let games = this.gameResults.length;

		//zwraca wszystkie elementy z win: true
		let wins = this.gameResults.filter((result) => result.win).length;
		// console.log(wins);

		//liczba porażek
		let losses = this.gameResults.filter((result) => !result.win).length;
		// console.log(games, wins, losses);

		return [games, wins, losses];
	}
}

// const stats = new Statistics();
