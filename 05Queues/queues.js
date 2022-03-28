class queue {
    constructor() {
        this.dataStore = [];
        this.enqueue = enqueue;
        this.dequeue = dequeue;
        this.front = front;
        this.back = back;
        this.toString = toString;
        this.empty = empty;
    }
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

var dancers = [
    "F Allison McMillan",
    "M Frank Opitz",
    "M Mason McMillan",
    "M Clayton Ruff",
    "F Cheryl Ferenback",
    "M Raymond Williams",
    "F Jennifer Ingram",
    "M Bryan Frazer",
    "M David Durr",
    "M Danny Martin",
    "F Aurora Adney"
]

class dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

var males = new queue();
var females = new queue();

function getDancers() {
    var names = [];
    for (var idx = 0; idx < dancers.length; idx++) {
        var person = dancers[idx].split(" ")
        var firstName = person[1];
        var lastName = person[2];

        names[idx] = firstName + " " + lastName;
    }

    for (var i = 0; i < dancers.length; ++i) {
        var person = dancers[i].split(" ");
        var sex = person[0];
        var name = names[i];
        if (sex == "F") {
            females.enqueue(new Dancer(name, sex));
        }
        else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

function dance() {
    console.log("The dance partners are: \n");
    while (!females.empty() && !males.empty()) {
        person = females.dequeue();
        putstr("Female dancer is: " + person.name);
        person = males.dequeue();
        printconsole.log(" and the male dancer is: " + person.name);
    }
    console.log();
}

function run() {
    getDancers(),
        dance();
    noDancepartners();
} //to get the dancers 

function noDancepartners() {
    console.log("\n");
    if (!females.empty()) {
        console.log(females.front().name + " is waiting to dance.");
    }
    if (!males.empty()) {
        console.log(males.front().name + " is waiting to dance.");
    }

}

15, 22, 31, 35, 46, 85, 91, 92

function distribute(nums, queues, n, digit) { 15, 22, 31, 35, 46, 85, 91, 92
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i] % 10].enqueue(nums[i]);
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {

            nums[i++] = queues[digit].dequeue();
        }
    }
}

var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log (ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());