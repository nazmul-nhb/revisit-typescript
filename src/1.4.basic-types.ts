// Basic Data Types

// Primitives

// String
let userName = "Nazmul Hassan"; // implicit type [string]

let user: string = "Nazmul Hassan"; // explicit type [string]

// Number
let salary: number = 500000;

// Boolean
let isActive: boolean = true;

// undefined
let valid: undefined = undefined;

// null
let nonExistent: null = null;

// Any
let x; // implicit
let y: any; //explicit

x = 12;
x = true;
y = undefined;
y = null;

// We should not use implicit/explicit any

// Non-Primitives

// Array
let friends: string[] = ["Monica", "Joey"];
let salaries: number[] = [2000, 5000, 3000];

// Tuple
// Special type of array
let coordinates: [string, number, boolean];

coordinates = ["5", 6, false];
