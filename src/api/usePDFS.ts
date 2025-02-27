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

export default function usePDFs() {
	const getAnnounceCul = useQuery({
		queryKey: ["pdfs", "announce-culs"],
		queryFn: fetchAnnounceCul,
	});

	return {
		getAnnounceCul,
	};
}
