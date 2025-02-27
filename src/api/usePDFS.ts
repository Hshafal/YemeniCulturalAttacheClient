import { IPDFs } from "../types";
import { useQuery } from "@tanstack/react-query";
import myAxios, { UPLOAD_URL } from "./myAxios";

export const fetchAnnounceCul = async (): Promise<IPDFs[]> => {
	const response = await myAxios.get<IPDFs[]>("/pdfs/announce-culs");
	const data = response.data.map((pdf) => {
		pdf.file = UPLOAD_URL + "/" + pdf.file;
		return pdf;
	});
	return data;
};

export const fetchAnnounceMin = async (): Promise<IPDFs[]> => {
	const response = await myAxios.get<IPDFs[]>("/pdfs/announce-min");
	const data = response.data.map((pdf) => {
		pdf.file = UPLOAD_URL + "/" + pdf.file;
		return pdf;
	});
	return data;
};

export const fetchMagazines = async (): Promise<IPDFs[]> => {
	const response = await myAxios.get<IPDFs[]>("/pdfs/magazines");
	const data = response.data.map((pdf) => {
		pdf.file = UPLOAD_URL + "/" + pdf.file;
		return pdf;
	});
	return data;
};

export default function usePDFs() {
	const announceCulQuery = useQuery({
		queryKey: ["pdfs", "announce-culs"],
		queryFn: fetchAnnounceCul,
	});
	
	const announceMinQuery = useQuery({
		queryKey: ["pdfs", "announce-min"],
		queryFn: fetchAnnounceMin,
	});

	const magazineQuery = useQuery({
		queryKey: ["pdfs", "magazines"],
		queryFn: fetchMagazines,
	});

	return {
		announceCulQuery,
		announceMinQuery,
		magazineQuery,
	};
}
