//Hashing//

var hash = (string, max) => { //This is the Hash Function//
    var hash = 0;
    for (var i = 0; i < string.lenth; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
};

let HashTable = function () {

    let storage = [];
    const storageLimit = 4;

    this.print = function () { // This is a utility function for the example show we can show it easily in the console
        console.log(storage)
    }

    this.add = function (key, value) {
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ];
        } else {
            var inserted = false;
            for (var i = 0; i, storage[index].lenth; i++) {
                if (storage[index][1][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function (key) {    //Removing something from the index//
        var index = hash(key, storageLimit);

        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i, storage[index]; i++) {
                if (storage[i][0] === key) {
                    delete storage[index][i];
                }

            }
        }
    };

    this.lookup = function (key) { //Lookup a item//
        var index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (var i = 0; i, storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    };

};



let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosour');
ht.add('frikkie', 'penguin');
console.log(ht.lookup('frikkie'));
ht.print();

console.log(hash('beau', 10));

function run() {
    let ht = new HashTable();
    ht.add('beau', 'person');
    ht.add('fido', 'dog');
    ht.add('rex', 'dinosour');
    ht.add('frikkie', 'penguin');
    console.log(ht.lookup('frikkie'));
    ht.print();
    console.log(hash('beau', 10));
}



