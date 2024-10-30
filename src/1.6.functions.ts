// Function

// Normal Function
function addNumbers(num1: number, num2: number): number {
	return num1 + num2;
}

addNumbers(1, 6);

// Arrow Function
const addNumbersArrow = (num1: number, num2: number): number => {
	return num1 + num2;
};

// Method
const objUser = {
	name: "Babul",
	balance: 100,
	addBalance(balance: number): number {
		return this.balance + balance;
	},
};

const newBalance = objUser.addBalance(500);

console.log(newBalance);