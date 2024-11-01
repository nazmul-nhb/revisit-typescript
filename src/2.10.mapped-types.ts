{
	// mapped types

	const arrOfNumbers: number[] = [1, 4, 5];

	// const arrOfStrings : string[] = ['1','4','5']
	const arrOfStrings: string[] = arrOfNumbers.map((number) =>
		number.toString()
	);

	console.log(arrOfStrings);

	type AreaProps = {
		height: number;
		width: number;
	};

	type Height = AreaProps["height"]; // look up type
	// type AreaString = {
	//   height: string;
	//   width: string
	// }
	// keyof AreaProps => "height"|"width"

	// T => {height:string;width:number}
	// key => T["width"]
	type AreaString<T> = {
		[key in keyof T]: T[key];
	};

	const area1: AreaString<{ height: string; width: number }> = {
		height: "100",
		width: 50,
	};

	//
}
