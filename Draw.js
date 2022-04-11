class Draw {
	constructor() {
		//kolory - opcje losowania
		this.options = ['red', 'green', 'blue'];

		//przechowuje wynik losowania - kolor wylosowany
		let _result = this.drawResult();
		//dostęp do _result
		this.getDrawResult = () => _result;
	}

	drawResult() {
		let colors = [];

		//uzupełnianie tablicy poprzez losowanie
		for (let i = 0; i < this.options.length; i++) {
			const index = Math.floor(Math.random() * this.options.length);

			const color = this.options[index];
			// console.log(color);

			colors.push(color);
		}
		return colors;
	}
}

// const draw = new Draw()
