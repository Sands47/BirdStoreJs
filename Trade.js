module.exports = function () {
    this.Trade = function(bird, count) {
        this.bird = bird;
        this.count = count;
    }

    this.Trade.prototype.getAmount = function () {
        return this.bird.price * this.count;
    }
}