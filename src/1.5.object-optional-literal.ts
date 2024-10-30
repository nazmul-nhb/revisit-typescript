// Reference Types --> Object

let newUser: {
	country: "Bangladesh"; // literal type
	name: string;
	readonly father: string; // readonly access modifier, cannot change this property
	age: number;
	isMarried?: boolean; // optional type
	salary: number | null | undefined;
} = {
	country: "Bangladesh",
	name: "Abul",
	father: "Babul",
	age: 33,
	isMarried: false,
	salary: null,
};
