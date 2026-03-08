let anagram1 = ['listen', 'silent']
let anagram2 = ['hello', 'world']

function isAnagram(word1, word2) {
    let word1Length = word1.length
    let word2length = word2.length

    if (word1Length === word2length) {
        let anagramCheckWord1 = word1.split("").sort().join("")
        let anagramCheckWord2 = word2.split("").sort().join("")

        if (anagramCheckWord1 === anagramCheckWord2) {
            console.log(`${word1} and ${word2} is Anagram words`)
        }
        else {
            console.log(`${word1} and ${word2} is not a Anagram words`)
        }
    }
    else {
        console.log(`${word1} and ${word2} is not a Anagram words`)
    }

}

isAnagram(anagram1[0], anagram1[1])
isAnagram(anagram2[0], anagram2[1])