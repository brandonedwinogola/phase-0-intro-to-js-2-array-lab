// Write your solution here!
beforeEach(function() {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});

const cats = ["Milo", "Otis", "Garfield"];
cats.push("Ralph");
// => 3

cats;
// => ["milo","Otis","Garfield", "Ralph"]

const Cats = ["Milo", "Otis", "Garfield", ];

Cats.unshift("Bob")
    // => 3

Cats;
// => ["Bob", "Milo", "Otis", "Garfield"]

const catS = ["Milo", "Otis", "Garfield"];

catS.pop();
//=> "Garfield"

catS;
// => ["Milo", "Otis"]


const cAts = ["Milo", "Otis", "Garfield"]

cAts.shift();
// => "Milo"

cAts;
// => ["Otis","Garnfield"]

const caTs = ["Milo", "Otis", "Garfield"];

caTs.push("Broom");
// => 3

caTs;
// => ["Milo", "Otis", "Garfield", "Broom"]

copyofcaTsUsingSpreadOperator;
// => ["Milo", "Otis", "Garfield"]

const caTS = ["Milo", "Otis", "Garfield"];

caTS.unshift("Arnold");
// => 3

caTS;
// => ["Arnold", "Milo", "Otis", "Garfield"];

copyOfcaTSUsingSpreadOperator;
// => ["Milo", "Otis", "Garfield"]

const CATS = ["Milo", "Otis", "Garfield"];
// => ["Milo", "Otis", "Garfield"]

CATS.splice(-1)
    // => ["Milo", "Otis"]

CATS;
["Milo", "Otis", "Garfield"]

const CatS = ["Milo", "Otis", "Garfield"]

CatS.splice(1)
    // => ["Otis", "Garfield"]

CatS;
["Milo", "Otis", "Garfield"]