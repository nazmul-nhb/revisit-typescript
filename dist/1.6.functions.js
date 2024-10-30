"use strict";
// Function
// Normal Function
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(1, 6);
// Arrow Function
const addNumbersArrow = (num1, num2) => {
    return num1 + num2;
};
// Method
const objUser = {
    name: "Babul",
    balance: 100,
    addBalance(balance) {
        return this.balance + balance;
    },
};
const newBalance = objUser.addBalance(500);
console.log(newBalance);
