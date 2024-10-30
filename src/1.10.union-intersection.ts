{
	// Union Types

	type FrontendDeveloper1 = "fakibazDeveloper" | "juniorDeveloper";
	type FullstackDeveloper1 = FrontendDeveloper1 | "expertDeveloper";

	type Developer = FrontendDeveloper1 | FullstackDeveloper2;

	const newDeveloper: FrontendDeveloper1 = "juniorDeveloper";

	type User = {
		name: string;
		email?: string;
		gender: "male" | "female";
		bloodGroup: "O+" | "A+" | "AB+";
	};

	const user1: User = {
		name: "persian",
		gender: "male",
		bloodGroup: "O+",
	};

    // Intersection Types

	type FrontendDeveloper2 = {
		skills: string[];
		designation1: "Frontend Developer";
	};

	type BackendDeveloper2 = {
		skills: string[];
		designation2: "Backend Developer";
	};

	type FullstackDeveloper2 = FrontendDeveloper2 & BackendDeveloper2;

	const fullstackDeveloper: FullstackDeveloper2 = {
		skills: ["HTML", "CSS", "EXPRESS"],
		designation1: "Frontend Developer",
		designation2: "Backend Developer",
	};

	//
}
