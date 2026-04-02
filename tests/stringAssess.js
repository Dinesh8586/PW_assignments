/*
// Declare the variable for string
let word = "Testleaf";

// declare variable as count = 0
let count = 0;

// for --> to loop from index 0 to end of string
for (let i = 0; i < word.length; i++) {

    // if --> find the match
    if (word[i] === 'e') {

        // increment the count
        count++;
    }
}
// print the count
console.log(count);
*/

let count = 0
let Test = "Testleaf"
let leng = Test.length
for (let i = 0; i <leng; i++){

    if(Test[i]=='e'){

        count = count+1
    }
}
console.log("The count of letter e is " + count)
