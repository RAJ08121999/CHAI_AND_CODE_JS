const marvelHeroes=["thor","ironman","spiderman"];
const dc=["superman","flash","batman"];

//marvelHeroes.push(dc);
// console.log(marvelHeroes)//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]    it returns an array inside an array

// console.log(marvelHeroes[3]);//[ 'superman', 'flash', 'batman' ]    index 3 me second array ko push kiya gaya tha or uss array ko 1 element mana gaya hai

// console.log(marvelHeroes[3][1]);//flash marvelHeroes array ka 3rd index i.e dc array ka index 1 ko access kiya gaya

// const allHeros=marvelHeroes.concat(dc);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]  dono array ko concatenate karke tisra new array return karta hai
// console.log(allHeros)

const allNewHeros=[...marvelHeroes,...dc];// spread method      [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//console.log(typeof(allNewHeros))//object

const realAnotherArray=[1,2,3,[4,5,6],7,[8,9,0,[1,2,4,[5,6,7,]]]]//array k andar array
const anotheArray=realAnotherArray.flat(Infinity)//sara array ko eksath merge karke ek hi array me de dega
console.log(anotheArray);[1, 2, 3, 4, 5, 6,7, 8, 9, 0, 1, 2,4, 5, 6, 7]

console.log(Array.isArray("HiRaj"));//falase    puch rahe hai ki kya ye ek array hai ye ek boolean value return karega
console.log(Array.from("HiRaj"));// [ 'H', 'i', 'R', 'a', 'j' ]     ye is string ko array me convert kar dega


let a1=100;
let a2=200;
let a3=300;
console.log(Array.of(a1,a2,a3));//[ 100, 200, 300 ] different variables ko leke ek new array bana diya
