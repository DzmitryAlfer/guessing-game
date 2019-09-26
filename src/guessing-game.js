class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        return Math.ceil((this._max + this._min) / 2);
    }

    lower() {
        this._max = this.guess();
    }

    greater() {
        this._min = this.guess();
    }
}

module.exports = GuessingGame;
