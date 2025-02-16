import { News } from "../types";
import { useQuery } from "@tanstack/react-query";
import myAxios from "./myAxios";
import { useParams } from "react-router-dom";

export const fetchNews = async (): Promise<News[]> => {
	const response = await myAxios.get("/news/only-news");
	return response.data;
};
export const fetchAds = async (): Promise<News[]> => {
	const response = await myAxios.get("/news/ads");
	return response.data;
};
export const fetchNotifications = async (): Promise<News[]> => {
	const response = await myAxios.get("/news/notifications");
	return response.data;
};
export const fetchActivities = async (): Promise<News[]> => {
	const response = await myAxios.get("/news/activities");
	return response.data;
};
export const fetchEvents = async (): Promise<News[]> => {
	const response = await myAxios.get("/news/events");
	return response.data;
};

export const getNewsById = async (id: string | undefined) => {
	const response = await myAxios.get(`/news/${id}`);
	return response.data;
};

export default function useNews() {
	const getNews = useQuery({
		queryKey: ["news", "only-news"],
		queryFn: fetchNews,
	});

	const getAds = useQuery({
		queryKey: ["news", "ads"],
		queryFn: fetchAds,
	});

	const getNotifications = useQuery({
		queryKey: ["news", "notifications"],
		queryFn: fetchNotifications,
	});

	const getActivities = useQuery({
		queryKey: ["news", "activities"],
		queryFn: fetchActivities,
	});

	const getEvents = useQuery({
		queryKey: ["news", "events"],
		queryFn: fetchActivities,
	});

	const { id } = useParams();
	const getByIdQuery = useQuery({
		queryKey: ["news", id],
		queryFn: () => getNewsById(id),
	});

	return {
		getNews,
		getAds,
		getNotifications,
		getActivities,
		getEvents,
		getByIdQuery,
	};
}
