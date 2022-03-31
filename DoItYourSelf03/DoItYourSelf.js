/*
Write a function that inserts an element into a list only if the element to be insertedis larger than any of the elements currently in the list. 
Larger can mean either greaterthan when working with numeric values, or further down in the alphabet, whenworking with textual 
values.
*/

function List() {
    this.array = [1, 37, 8, 50, "a", "o", "ab"];
    this.add = add;
    this.check = check;
    this.display = display;
}

function display(data, description) {
    console.log(data, "---" + description + "---");
}

function add(data) {
    if (this.check(data)) {
        this.array.push(data);
        this.display(this.array, "succses")
    }
    else {
        this.display(this.array, "error")
    }
}

function check(data) {
    var arrayType = this.array.filter(function (number) {
        return typeof number == typeof data;
    });
    function bigger(number) {
        return data > number;
    }
    return arrayType.every(bigger);
}

var list = new List();
list.add(100); // Will add to the list and show succses
list.add("m") // Will not add to the list and show error
/*
Write a function that inserts an element into a list only if the element to be inserted
is smaller than any of the elements currently in the list. 
*/

function List() {
    this.array = [1, 37, 8, 50, "a", "o", "ab"];
    this.add = add;
    this.check = check;
    this.display = display;
}

function display(data, description) {
    console.log(data, "---" + description + "---");
}

function add(data) {
    if (this.check(data)) {
        this.array.push(data);
        this.display(this.array, "succses")
    }
    else {
        this.display(this.array, "error")
    }
}

function check(data) {
    var arrayType = this.array.filter(function (number) {
        return typeof number == typeof data;
    });
    function smaller(number) {
        return data < number;
    }
    return arrayType.every(smaller);
}

var list = new List();
list.add(0); // Will add to the list and show succses
list.add("l") // Will not add to the list and show error




















function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}


function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}

function prev() {
    if (this.pos < 0) {
        --this.pos;
    }
}


function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}

let user = {
    name: 'Jesse',
    contact: {
        email: 'codestackr@gmail.com'
    }
}
console.log(user)
console.log({ user })

function one() {
    two()
}
function two() {
    three()
}
function three() {
    console.trace()
}
one()








//Q3-3

var people = new List();
for (var i = 0; i < people.length; ++i) {
    peopleList.append(people[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        print(list.getElement());
    }
}

//Q3-4

function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].trim();
    }
    return arr;
}

var movieList = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        print(list.getElement());
    }

}

function displayList(list) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        if (list.getElement() instanceof Customer) {
            print(list.getElement()["name"] + ", " +
                list.getElement()["movie"]);
        }
        else {
            print(list.getElement());
        }
    }
}

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

function checkOut(name, movie, filmList, customerList) {
    if (movieList.contains(movie)) {
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }
    else {
        print(movie + " is not available.");
    }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe", "The Godfather", movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);


var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}
print("Available movies: \n");
displayList(movieList);
putstr("\nEnter your name: ");
var name = readline();
putstr("What movie would you like? ");
var movie = readline();
checkOut(name, movie, movieList, customers);
print("\nCustomer Rentals: \n");
displayList(customers);
print("\nMovies Now Available\n");
displayList(movieList);

//Q3-5

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movies.length; ++i) {
    movieList.append(movies[i]);
}

//greate a if function to say that when the movie is is --1 and someone checks it back in then it needs to show ++1 and then 


//vusi showing us but goingg from screen to screen and not actually showing us nothing and then explaining it so fast noone can actually

class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    this.displayPeople = displayPeople;
}
function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize - 1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
function displayPeople() {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].sex === "F") {
            female.dataStore[i] = this.dataStore[i];
        } else {
            male.dataStore[i] = this.dataStore[i];
        }
    }
}

var male = new List();
var female = new List();
var people = new List();

function run() {
    var person1 = new Person("Sipho", "M");
    var person2 = new Person("Neo", "F");
    var person3 = new Person("Dyllan", "M");
    var person4 = new Person("Fiona", "F");
    var person5 = new Person("Mike", "M");

    people.append(person1);
    people.append(person2);
    people.append(person3);
    people.append(person4);
    people.append(person5);
    people.displayPeople();
}


function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

function Stack() {
    this.dataStore = [];
    this.top = 0;
this.push = push;
this.pop = pop;
this.peek = peek;
this.clear = clear;
this.length = length;
}
function push(element) {
this.dataStore[this.top++] = element;
}
function peek() {
return this.dataStore[this.top-1];
}
function pop() {
return this.dataStore[--this.top];
}
function clear() {
this.top = 0;
}
function length() {
return this.top;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
print("length: " + s.length());
print(s.peek());
var popped = s.pop();
print("The popped element is: " + popped);
print(s.peek());
s.push("Cynthia");
print(s.peek());
s.clear();
print("length: " + s.length());
print(s.peek());
s.push("Clayton");
print(s.peek());