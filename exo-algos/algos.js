// exo 1 la fonction "isString" réussis
// function isString(myString) {
//     if(typeof(myString) === "string"){
//         return true;
//     }else {
//         return false;
//     }
// }
// console.log(isString("Marc"));
// console.log(isString(2));



// exo 2 la fonction "isSudent" réussis
// function greetings(isStudent) {
//     if(isStudent == true){
//         console.log("Bienvenue cher élève")
//     }else {
//         console.log("Bienvenue cher parent");
//     }
// }
// greetings(true);
// greetings(false);


// //exo 3 la fonction "checkWord" réussis
// function checkWord(word) {
//     if(word.length <= 3){
//         console.log("Ce mot est trop court");
//     }else {
//         console.log("Le mot " + (word) + " est tout à fait correct");
//     }
// }
// // checkWord("qwd") // Ce mot est trop court
// checkWord("pizza") // Le mot pizza est tout à fait correct


//exo 4 la fonction "makeSum" réussis
// function makeSum(number1, number2) {
//    return (number1 + number2);
// }
// console.log(makeSum(2, 3)) // Retourne 5


// exo 5 la fonction "makeSumFromArray" réussis a moitié
// function makeSumFromArray(numbers) {
//     let r;
//     for(let i = 0; i <= numbers.length; i++){
//             return numbers[0] + numbers[1] + numbers[2] + numbers[3];
//     }
// }
// console.log(makeSumFromArray([1, 2, 3, 5])) // Retourne 11


// exo 6
// function findOddNumbers(numbers) {
//     let arr = [];
//     for(let i = 0; i < numbers.length; i = i % 2){
//        return arr += numbers[i];
//     }
// }

// console.log(findOddNumbers([1, 2, 5, 7, 8, 11, 13, 16, 19, 20, 21])) // [1, 5, 7, 11, 13, 19, 21]

//exo 7 la fonction "filterArray"
// function filterArray(myArray) {
//     let arr = [];
//     for(let i; i < myArray.length; i++){
//         if(typeof(myArray) === "number"){
//             return arr + [i];
//         }
//     }
// }

// console.log(filterArray([1, 2, true, "Tom", "Max", false, 4, 5, 6, "John"])) // [1, 2, 4, 5, 6]
// function concatString(arrayOfStrings) {
//     for(let i = 0; i < concatString.length; i++){
//         return  arrayOfStrings;
//     }
// }

// console.log(concatString(["Un", " ", "code", " ", "de", " ", "qualité"])) // "Un code de qualité"


// exo 12
// function makeFriends(friends) {
// }

// const myFriends = [
//     {
//         firstName: "Max",
//         lastName: "Verstappen",
//         age: 27
//     },
//     {
//         firstName: "Lewis",
//         lastName: "Hamilton",
//         age: 37
//     },
//     {
//         firstName: "Daniel",
//         lastName: "Ricciardo",
//         age: 36
//     }
// ]

// console.log(makeFriends(myFriends)) // ["Max", "Lewis", "Daniel"]

