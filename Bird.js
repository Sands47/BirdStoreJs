module.exports = function () {
    this.Bird = function (name, price) {
        this.name = name;
        this.price = price;
        this.count = 0;
    }

    this.Bird.prototype.toString = function () {
        return this.name;
    }
};