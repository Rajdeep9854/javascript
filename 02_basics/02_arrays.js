const marvel_heroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["supernam","flash","batsman"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

/*const allHeros=marvel_heroes.concat(dc_heroes)
console.log(allHeros);*/

const allNewHeroes=[...marvel_heroes,...dc_heroes]
//console.log(typeof marvel_heroes);
//console.log(typeof allNewHeroes);

const another_array = [1,2,[5,6],4,[1,2,[6,7,8,9]]]
const real_anotehr_array = another_array.flat(2)// use Infinity to do flatting automatically
//console.log(real_anotehr_array);

//console.log(Array.isArray("rajdeep"));
//console.log(Array.from("rajdeep"));
//console.log(Array.from({name:"rajdeep"}));// gives an empty array// intersting

let a=100
let b= 200
let c = 300

console.log(Array.of(a,b,c));