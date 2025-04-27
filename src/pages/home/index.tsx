import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import myAxios from "../../api/myAxios";
import HeroSlider from "./Hero";
import NewsList from "../news/NewsList";
import Contact from "../../components/Contact";
import { BackgroundGradient } from "../../components/background-gradient";
import { formatDate } from "../../utils";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const slides = [
    { id: 1, image: "/hero3.jpg", title: "OLD SANA'A", description: "" },
    { id: 2, image: "/hero2.jpg", title: "SHIBAM", description: "" },
    { id: 4, image: "/hero4.jpg", title: "TAWILA TANKS", description: "" },
    { id: 5, image: "/hero5.jpg", title: "SOCOTRA ISLAND", description: "" },
    { id: 6, image: "/hero9.jpg", title: "DRAGON BLOOD TREE", description: "" },
    { id: 7, image: "/hero6.jpg", title: "DAR ALHAJAR", description: "" },
    { id: 8, image: "/hero7.jpg", title: "TAIZ CASTLE", description: "" },
    { id: 9, image: "/hero8.jpg", title: "LITTLE BIG BIN", description: "" },
    { id: 10, image: "/hero10.webp", title: "BILQIS' THRONE", description: "" },
    { id: 11, image: "/hero11.jpg", title: "SHAHARAH BRIDGE", description: "" },
  ];

  return (
    <div>
      <HeroSlider slides={slides} />

      <div className="flex justify-center items-center md:flex-row flex-col-reverse max-w-7xl mx-auto">
        <main className="md:w-3/4 w-full p-1">
          <div className="flex gap-3">
            <div className="h-10 w-2 bg-red-500"></div>
            <h1 className="font-bold text-3xl text-right">{t("news.main_news")}</h1>
          </div>
          <NewsList />
          <div className="text-center m-2">
            <Link
              to="/news"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-red-700 transition"
            >
              {t("hero.read_more")}
            </Link>
          </div>
        </main>

        <aside className="md:w-1/4 p-4">
          <ImportantNewsCard />
        </aside>
      </div>

      <Contact />
    </div>
  );
};


interface NewsItem {
  _id: string;
  title: string;
  titleArabic?: string;
  titleEnglish?: string;
  titleRussian?: string;
  description: string;
  images?: string[];
  createdAt?: string;
  updatedAt?: string;
  isImportant?: boolean;
  date: string;
}

const ImportantNewsCard: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", "important"],
    queryFn: async () => {
      const res = await myAxios.get("/news/important");
      return res.data as NewsItem[];
    },
  });

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Server error</h1>;
  }

  return (
		<BackgroundGradient className="rounded-[22px] bg-white dark:bg-zinc-900">
			<div>
				<div className="bg-white rounded-[22px] border shadow-sm hover:shadow-md transition-shadow duration-200 p-4">
					<h1 className="font-bold text-3xl text-center p-5 text-red-600 flashing">
						{currentLanguage === "ar"
							? "هــــــام"
							: currentLanguage === "en"
							? "Important"
							: currentLanguage === "ru"
							? "Важно"
							: "هــــــام"}
					</h1>
					{data &&
						data.map((news) => (
							<div key={news._id} className="border border-black rounded-md my-2">
								<Link to={`/news/${news._id}`} className="group">
									<div className="p-4">
										<h3 className="text-md font-semibold text-gray-900 hover:text-red-600 transition-colors flashing">
											{currentLanguage === "ar"
												? news.titleArabic || news.title
												: currentLanguage === "en"
												? news.titleEnglish || news.title
												: currentLanguage === "ru"
												? news.titleRussian || news.title
												: news.title}
										</h3>
										<p className="text-gray-600">{formatDate(news.date)}</p>
									</div>
								</Link>
							</div>
						))}
				</div>
			</div>
		</BackgroundGradient>
  );
};

export default HomePage;
