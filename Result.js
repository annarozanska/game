class Result {
	//nie ma instancji są same meody dla pliku Game.js

	//jeśli wygrał to:
	static moneyWinInGame(result, bid) {
		if (result) return 3 * bid;
		else return 0;
	}

	//jeśli przegrał to:
	//zasady gry
	static checkWinner(draw) {
		if (
			(draw[0] === draw[1] && draw[1] === draw[2]) ||
			(draw[0] !== draw[0] && draw[1] !== draw[2] && draw[0] !== draw[2])
		)
			return true;
		else return false;
	}
}

//tak dostajemy sie do metody static
// Result.moneyWinInGame(true, 10)
