import React from "react";
import Card from "./ActivityCard";
import useNews from "../../api/useNews";
import { getImageURL } from "../../utils";
import { sortByDate } from "../../utils";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Loading";

// Define the type for activity
interface Activity {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  thumbnail?: string;
}

const ActivityList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getActivities } = useNews();
  const { data, isLoading, isError } = getActivities;

  if (isLoading) return <Loading />;
  if (isError) return <h1>{t("server_error")}</h1>;
  if (data?.length === 0) return <h1>{t("no_activities")}</h1>;

  // Function to get the title based on the current language
  const getTitle = (activity: Activity): string => {
    const currentLanguage = i18n.language;
    switch (currentLanguage) {
      case "ar":
        return activity.titleArabic || activity.title;
      case "en":
        return activity.titleEnglish || activity.title;
      case "ru":
        return activity.titleRussian || activity.title;
      default:
        return activity.title;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        sortByDate(data).map((activity: Activity) => (
          <Card
            key={activity._id}
            id={activity._id}
            title={getTitle(activity)}
            imageSrc={getImageURL(activity.thumbnail)}
            imageAlt={getTitle(activity)}
          />
        ))}
    </div>
  );
};

export default ActivityList;
