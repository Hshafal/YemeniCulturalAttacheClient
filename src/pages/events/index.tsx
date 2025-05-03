import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import useNews from "../../api/useNews";
import { useTranslation } from "react-i18next";
import { sortByDate } from "../../utils";

export default function Page() {
  const { getEvents } = useNews();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const { data: events, isLoading, isError } = getEvents;
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Server error</h1>;

  const dir = currentLanguage === "ar" ? "rtl" : "ltr";

  return (
    <div className="min-h-auto py-12 px-4 sm:px-6 lg:px-8 text-black w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events &&
          sortByDate(events)?.map((data: any) => {
            const title =
              currentLanguage === "ar"
                ? data.titleArabic || data.title
                : currentLanguage === "en"
                  ? data.titleEnglish || data.title
                  : currentLanguage === "ru"
                    ? data.titleRussian || data.title
                    : data.title;

            const fullDescription =
              currentLanguage === "ar"
                ? data.descriptionArabic || data.description
                : currentLanguage === "en"
                  ? data.descriptionEnglish || data.description
                  : currentLanguage === "ru"
                    ? data.descriptionRussian || data.description
                    : data.description;

            const shortDescription = fullDescription
              .replace(/<[^>]+>/g, "")
              .slice(0, 120) + "...";

            return (
              <Link to={`/activities/${data._id}`} key={data._id}>
                <div className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition h-full">
                  <ImageSlider
                    images={[data.thumbnail, ...data.images]}
                    title={title}
                    description={shortDescription}
                    date={data.date}
                    dir={dir}
                  />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
