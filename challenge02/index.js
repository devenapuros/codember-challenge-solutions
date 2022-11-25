let message = "119101 97114101 108101103105111110";

let result = "";

let i = 0;
let asciiCode;
while (i < message.length) {
    let firstCharacter = message[i];
    if (firstCharacter === " ") {
        result += firstCharacter;
        i++;
        continue;
    }
    if (parseInt(firstCharacter) === 1) {
        let asciiLetter = message.substring(i, i + 3);
        asciiCode = parseInt(asciiLetter);
        i += 3;
    } else {
        let asciiLetter = message.substring(i, i + 2);
        asciiCode = parseInt(asciiLetter);
        i += 2;
    }
    result += String.fromCharCode(asciiCode);
}

console.log(result);
