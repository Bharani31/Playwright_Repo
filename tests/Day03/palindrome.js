let str = "testleaf";
let str1 = "madam"

function palindrome(word) {
    let reversed = word.split("").reverse().join("");

    if (word === reversed) {
        console.log(`${word} is a Palindrome`)
    }
    else {
        console.log(`${word} is not a Palindrome`)
    }
}

palindrome(str);
palindrome(str1)