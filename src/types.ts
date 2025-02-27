export interface News {
	_id: string;
	title: string;
	description: string;
	category: string;
	date: string;
	thumbnail?: string;
	images?: string[];
}

export interface IPDFs {
	_id: string;
	title: string;
	file: string;
	category: "MAGAZINE" | "ANNOUNCE-CUL" | "ANNOUNCE-MIN";
	date: string;
	descrption?: string;
}
