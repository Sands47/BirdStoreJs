require('./Store.js')();

function demo() {
    var store = new Store();
    var duck = new Bird('Duck', 10);
    var chicken = new Bird('Chicken', 5);
    var jay = new Client('Jay');

    store.add(duck, 2);
    store.add(chicken, 10);
    store.add('Parrot', 2, 15);

    printAvailableBirds(store);

    store.sell(chicken, 2, jay);
    store.sell(duck, 1, jay);
    store.sell('Parrot', 1, new Client('Bob'));
    store.sell(duck, 1, store.getClientByName('Jay'));
    store.sell(chicken, 2, new Client('Randall'));

    store.changePrice('Duck', 15);
    printAvailableBirds(store);
    printTotalSoldAmount(store);
    printLessThanThree(store);
    printAllClients(store);
}

demo();