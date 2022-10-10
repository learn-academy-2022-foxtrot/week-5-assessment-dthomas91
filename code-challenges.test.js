// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.


const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"


describe("codeMessage", () => {
  it("returns a coded message", () => {
    expect(codeMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codeMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codeMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// ReferenceError: codeMessage is not defined

// b) Create the function that makes the test pass.

// input: String
// output: String

/* Pseudocode
  1. create a function and pass in a string
  2. split the string
  3. map through the indexes 
  4. use if/else statements to set the correct conditions
  5. join the string back together
*/


const codeMessage = (str) => {
  return str.split("").map((value) => {
    if (value === "a" || value === "A") {
      return "4" 
    } else if (value === "e" || value === "E") {
      return "3"
    } else if (value === "i" || value === "I") {
      return "1"
    } else if (value === "o" || value === "O") {
      return "0"
    } else {
      return value
    }
  }).join("")

  // PASS  ./code-challenges.test.js

  // ---------------------Code below this line was my first attempt at challenge 1--------------------

// for (let i = 0; i < arr.length; i ++) {
//   if (i === "a") {
//    emptyArr.push("4")
//   } else if (i === "e") {
//     emptyArr.push("3")
//   } else if (i === "i") {
//    emptyArr.push("1")
//   } else if (i === "o") {
//    emptyArr.push("0")
//   }
// }
// return emptyArr
}

// console.log(emptyArr)

// const codeMessage = (str) => {
//   return str.split("")
// }
// console.log(codeMessage(secretCodeWord1))

// ---------------------------------------------------------------------------------------------------




// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("lessFruit", () => {
  it("returns an array of all the words containing that particular letter", () => {
    expect(lessFruit(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(lessFruit(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// ReferenceError: lessFruit is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

/*
  Pseudocode
    1. create a function, pass in an array and a string
    2. use the filter method on the array
    3. bring the value of the array to lowercase to account for case sensitivity 
    4. check if the array includes the string argument
*/

const lessFruit = (arr, str) => {
    return arr.filter((value) => 
    value.toLowerCase().includes(str.toLowerCase()) 
   )
}

//  PASS  ./code-challenges.test.js

/*--------------------- Code below this line was my first attempt at question 2 ---------------------*/

// const lessFruit = (arr) => {
//   return arr.map((value) => {
//     if (value.include(str)) {
//       return value
//     }
//   })
// }
//  console.log(lessFruit(letterA))

// ----------------------------------------------------------------------------------------------


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("determines whether or not the array is a full house", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})

//  ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

const fullHouse = (arr) => {
  
}
