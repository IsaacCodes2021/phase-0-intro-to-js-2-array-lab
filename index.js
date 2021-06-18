// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push('Ralph');
}

function destructivelyPrependCat() {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
   name = [...cats.slice(), 'Broom'];
   return name;
}

function prependCat(name) {
    name = ['Arnold', ...cats.slice()]
    return name;
}

function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
}

function removeFirstCat() {
    const newCats = cats.slice(-2);
    return newCats;
}

removeLastCat();
console.log(cats);