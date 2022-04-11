class Game {
    constructor(start) {
        //zawiera wszystkie elementy strony

        //przechowywanie klasy statistic
        this.stats = new Statistics()

        //w wallet przekazujemy wartość pieniędzy
        this.wallet = new Wallet(start)

        //pobranie elementów
        //wiązanie bind aby działal nam this przy wywolaniu w metodzie startGame
        document.getElementById('start').addEventListener('click', this.startGame.bind(this))
        this.spanWallet = document.querySelector('.panel span.wallet')
        this.boards = [...document.querySelectorAll('div.color')]
        this.inputBid = document.getElementById('bid')
        this.spanResult = document.querySelector('.score span.result')
        this.spanGame = document.querySelector('.score span.number')
        this.spanWins = document.querySelector('.score span.win')
        this.spanLosses = document.querySelector('.score span.loss')

        this.render() 
    }
    
    //wyświetlanie na stronie
    //wartość domyślna z getWalletValue
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = '', stats = [0,0,0], bid = 0, wonMany = 0) {
        // console.log('gramy');

        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i]
        })
        //wyświetlenie środjów przed pierwszą grą
        this.spanWallet.textContent = money
        if(result) {
            result = `Wygrałeś ${wonMany}PLN.`
        } else if(!result && result !== ''){
            result = `Przegrałeś ${bid}PLN.`
        }
        
        this.spanResult.textContent = result
        //ile gier już rozegrano
        this.spanGame.textContent = stats[0]
        this.spanWins.textContent = stats[1]
        this.spanLosses.textContent = stats[2]

        //czyszczenie input
        this.inputBid.value = ''
    }

    //wywoływane na kliknięcie w przycisk
    startGame() {

        //kwota nie jest mniejsza od 1
        if(this.inputBid.value < 1) return alert('Kwota. którą chcesz grać jest za mala')
        const bid = Math.floor(this.inputBid.value)
        //już nie jest stringiem a number

        //czy mamy środki do gry
        if(!this.wallet.checkCanPlay(bid)) {
            return alert('Masz za malo środków, lub podana została nieprawidłowa wartość')
        }

        //odejmowanie z portfela po graniu
        this.wallet.changeWallet(bid, '-')

        this.draw = new Draw()

        //przypisanie kolorow
        const colors = this.draw.getDrawResult()

        //pokazuje czy wygraliśmy czy nie (true/folse)
        const win = Result.checkWinner(colors)
        // console.log(win);

        const wonMoney = Result.moneyWinInGame(win, bid)
        // console.log(wonMoney);

        //dodanie środków do portfela
        this.wallet.changeWallet(wonMoney)

        this.stats.addGameStatistics(win, bid)

        //podanie zmiennych
        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
    }
}


