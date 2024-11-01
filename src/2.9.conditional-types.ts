{
	//conditional type

	type a1 = number;
	type b1 = string;

	type x = a1 extends null ? true : false; // conditional type

	type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

	type Sheikh = {
		bike: string;
		car: string;
		ship: string;
		plane: string;
	};

	// keyof Sheikh --> "bike" | "car" | "ship" | "plane"

	// car ase kina / bike ase kina / ship kina / plane ase kina
	type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

	type HasPlane = CheckVehicle<"plane">;
	type HasCow = CheckVehicle<"cow">;
	//
}
