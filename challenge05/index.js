/* eslint-disable no-constant-condition */
import fs from "fs";

let data = fs.readFileSync("challenge05/mecenas.json");
data = JSON.parse(data);

const next = (index) => {
    if (index === data.length - 1) return 0;
    return index + 1;
};

const getSurvivor = () => {
    let i = -1;
    while (true) {
        i = next(i);
        if (!data[i]) continue;
        let j = next(i);
        while (true) {
            if (data[j] && j !== i) {
                data[j] = null;
                break;
            }
            if (j == i) return { index: i, survivor: data[i] };
            j = next(j);
        }
    }
};

const res = getSurvivor();
console.log(res);
