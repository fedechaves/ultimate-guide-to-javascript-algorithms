/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split('').reverse().join('')
    

}

function reverseString(text) {
    let reversed = ''
    for(let i = text.length; i >= 0; i--) {
        reversed += text[i]
    }
    return reversed

}

function reverseString(text) {
    let reversed = ''

    for(let char of text) {
        reversed = char + reversed
    }

    return reversed
}

function reverseString(text) {
    if (text === "") {
        return ""
    } else {
        return reverseString(text.substr(1)) + text[0]
    }
}


function reverseString (text) {
    return text.split("").reduce((acc, char) => char + acc, "")
}

module.exports = reverseString