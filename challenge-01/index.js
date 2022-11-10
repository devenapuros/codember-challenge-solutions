const fs = require("fs/promises");

fs.readFile("./users.txt", { encoding: "utf8" })
    .then((data) => filterUsers(data))
    .catch((err) => {
        throw err;
    });

const filterFields = (userStr) => {
    let userObject = {};
    let userArray = userStr.replaceAll("\n", " ");
    userArray = userArray.split(" ");
    userArray.forEach((field) => {
        let fieldsArray = field.split(":");
        userObject = { ...userObject, [fieldsArray[0]]: fieldsArray[1] };
    });
    return userObject;
};

const filterUsers = (data) => {
    let validUsers = [];
    let allUsersObject = [];
    let allUsersArray = data.split("\n\n"); // Separa todos los usuarios en un array de strings
    allUsersArray.forEach((userStr) => {
        let userObject = filterFields(userStr); // Transforma el string con los datos en un objecto
        allUsersObject.push(userObject);
        if (
            userObject.usr &&
            userObject.eme &&
            userObject.psw &&
            userObject.age &&
            userObject.loc &&
            userObject.fll
        ) {
            validUsers.push(userObject);
        }
    });
    console.log("Valid users: ", validUsers.length);
    console.log("Last valid user", validUsers[validUsers.length - 1]);
};
