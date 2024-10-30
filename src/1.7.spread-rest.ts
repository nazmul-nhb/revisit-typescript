{
	// Spread Operator
	const books1: string[] = ["Hobbit", "1984", "Jungle Book"];
	const books2: string[] = [
		"Lord of the Rings",
		"Animal Farm",
		"Of Mice and Men",
	];

	// combine
	const allBooks: string[] = [...books1, ...books2];
	// or
	books1.push(...books2);

	console.log(allBooks);
	console.log(books1);

	const greetCriminals = (...criminals: string[]): void => {
		criminals.forEach((criminal) => console.log(`Hello ${criminal}`));
	};

    greetCriminals("Hablu", "Tapa", "Madan", "Don")
}
