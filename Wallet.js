class Wallet {
	constructor(money) {
		let _money = money;

		//pobieranie aktualnej zawartości portfela
		this.getWalletValue = () => _money;

		//sprawdzanie czy user ma odpowiednią liczbę sroków do gry
		this.checkCanPlay = (value) => {
			if (_money >= value) return true;
			return false;
		};

		//zmiana wartości portfela
		this.changeWallet = (value, type = '+') => {
			if (typeof value === 'number' && !isNaN(value)) {
				if (type === '+') {
					return (_money += value);
				} else if (type === '-') {
					return (_money -= value);
				} else {
					throw new Error('Nieprawidlowy typ dzialania');
				}
			} else {
				console.log(typeof value);
				throw new Error('Nieprawidłowa liczba');
			}
		};
	}
}

// to będzie gdzie indziej
// const wallet = new Wallet(100)
