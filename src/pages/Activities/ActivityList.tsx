import React from "react";
import Card from "./ActivityCard";
import useNews from "../../api/useNews";
import { getImageURL, sortByDate } from "../../utils";
import { useTranslation } from "react-i18next";
import Loading from "../../components/Loading";

interface Activity {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  description?: string;
  descriptionArabic?: string;
  descriptionEnglish?: string;
  descriptionRussian?: string;
  thumbnail?: string;
}

const ActivityList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { getActivities } = useNews();
  const { data, isLoading, isError } = getActivities;

  if (isLoading) return <Loading />;
  if (isError) return <h1>{t("server_error")}</h1>;
  if (!data || data.length === 0) return <h1>{t("no_activities")}</h1>;

  const lang = i18n.language;

  const getTitle = (activity: Activity): string =>
    lang === "ar"
      ? activity.titleArabic || activity.title
      : lang === "en"
        ? activity.titleEnglish || activity.title
        : lang === "ru"
          ? activity.titleRussian || activity.title
          : activity.title;

  // const getDescription = (activity: Activity): string =>
  //   lang === "ar"
  //     ? activity.descriptionArabic || activity.description || ""
  //     : lang === "en"
  //       ? activity.descriptionEnglish || activity.description || ""
  //       : lang === "ru"
  //         ? activity.descriptionRussian || activity.description || ""
  //         : activity.description || "";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortByDate(data).map((activity) => (
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
