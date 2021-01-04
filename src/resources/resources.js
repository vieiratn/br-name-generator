// Importing external modules.
const { dbFirstName, dbMiddleName, dbLastName } = require('../database/database');

// Random number generator.
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Fullname generator.
function brNameGenerator(qty = 1) {
    let names = [];
    let cont = 1;
    while (cont <= qty) {
        let firstName = dbFirstName[randInt(0, 40)];
        let middleName = dbMiddleName[randInt(0, 20)];
        let lastName = dbLastName[randInt(0, 20)];
        let fullName = `${firstName} ${middleName} ${lastName}`;
        if (!names.includes(fullName)) {
            names.push(fullName);
            cont++;
        }
    }
    return names;
}

module.exports = brNameGenerator;