import React from "react";
import Card from "./ActivityCard";
import useNews from "../../api/useNews";
import { getImageURL } from "../../utils";
import { sortByDate } from "../../utils";

const ActivityList: React.FC = () => {
	const { getActivities } = useNews();
	const { data, isLoading, isError } = getActivities;

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Server error</h1>;
	if (data?.length === 0) return <h1>لا توجد انشطة حاليا</h1>;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
			{data &&
				sortByDate(data).map((newsItem) => (
					<Card
						key={newsItem._id}
						id={newsItem._id}
						title={newsItem.title}
						imageSrc={getImageURL(newsItem.thumbnail)}
						imageAlt={newsItem.title}
					/>
				))}
		</div>
	);
};

export default ActivityList;
