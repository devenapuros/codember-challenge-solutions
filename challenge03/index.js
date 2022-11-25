import fs from "fs";

let data = fs.readFileSync("challenge03/data.json");
data = JSON.parse(data);

let lastLength = 1;
let currentLength = 1;
let lastColor = data[0];
let currentColor = "";
let alternator = false;
let colors = {
    even: data[0],
    odd: "",
};

const position = (alternator) => (alternator ? "even" : "odd");

for (let index = 1; index < data.length; index++) {
    let currentPosition = position(alternator);
    if (
        colors[currentPosition] === data[index] ||
        (!colors[currentPosition] &&
            data[index] !== colors[position(!alternator)])
    ) {
        currentLength++;
        currentColor = data[index];
        colors[currentPosition] = data[index];
        alternator = !alternator;
        continue;
    }

    if (currentLength >= lastLength) {
        lastLength = currentLength;
        lastColor = currentColor;
    }

    if (data[index] === colors[position(!alternator)]) {
        colors = { even: data[index], odd: "" };
        currentColor = data[index];
        currentLength = 1;
        alternator = false;
        continue;
    }

    colors = { even: data[index - 1], odd: "" };
    currentColor = data[index - 1];
    currentLength = 1;
    alternator = false;
    index--;
}

if (currentLength >= lastLength) {
    lastLength = currentLength;
    lastColor = currentColor;
}

console.log(lastLength, lastColor);
