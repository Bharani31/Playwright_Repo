let sen1 = "Hello World"
let sen2 = "   fly me   to   the moon  "

function lastWordLength(str) {
    let wordLength = str.trim().split(" ").length
    let word = str.trim().split(" ")[wordLength - 1]

    let lastLength = word.length

    console.log(`The last word is "${word}" with length ${lastLength}`)

}

lastWordLength(sen1)
lastWordLength(sen2)