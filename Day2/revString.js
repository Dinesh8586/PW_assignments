// Declare a string
let str = "Dinesh";

// Convert string into array of characters
let chars = str.split("");

// Reverse the string using loop
let reversed = "";
for (let i = chars.length - 1; i >= 0; i--) {
    reversed += chars[i];
}

// Print reversed string
console.log("Reversed String:", reversed);

// Check palindrome
if (str === reversed) {
    console.log(true);  // It is palindrome
} else {
    console.log(false); // Not palindrome
}