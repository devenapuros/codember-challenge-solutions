let validatePasswords = [];

const validatePassword = (number) => {
    let str_number = number.toString();
    if (str_number.length !== 5) return false;

    let five_counter = 0;
    for (let index = 0; index < str_number.length; index++) {
        let first_digit = parseInt(str_number[index]);
        let second_digit = str_number[index + 1]
            ? parseInt(str_number[index + 1])
            : first_digit + 1;
        if (first_digit > second_digit) return false;
        if (first_digit === 5) five_counter++;
    }
    if (five_counter < 2) return false;
    return true;
};

for (let i = 11098; i <= 98123; i++) {
    if (validatePassword(i)) validatePasswords.push(i);
}

console.log(validatePasswords.length, validatePasswords[55]);
