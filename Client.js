module.exports = function () {
    this.Client = function(name) {
        this.name = name;
        this.trades = [];
    }

    this.Client.prototype.toString = function () {
        return this.name;
    }
}