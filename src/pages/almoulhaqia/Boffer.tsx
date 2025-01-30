import React from "react";
import { useTranslation } from "react-i18next";

const Boffer: React.FC = () => {
  const { t, i18n } = useTranslation(); // Hook to get translation function and current language

  const isArabic = i18n.language === "ar"; // Check if the language is Arabic

  return (
		<section className="relative">
			<div
				dir={isArabic ? "rtl" : "ltr"} // Set the direction based on the language
				className="relative h-24 lg:h-[18rem] md:h-96 flex items-center overflow-hidden w-full max-w-7xl px-4 lg:px-5 mx-auto"
			>
				{/* Red background curve */}
				<div className="absolute top-0 left-0 w-full h-full">
					<div>
						<div className="h-8 md:h-20 bg-red-500"></div>
						<div className="h-8 md:h-20 bg-white flex justify-start items-center">
							<h1 className="text-xl mx-10 sm:text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
								{t("boffer.title")}
							</h1>
						</div>
						<div className="h-8 md:h-20 bg-black flex justify-start items-center ">
							<p className="w-60 mx-10 md:w-full md:text-lg text-xs lg:text-3xl text-white">
								{t("boffer.description")}
							</p>
						</div>
					</div>
				</div>

				{/* Black and white circle with emblem */}
				<div
					className={`absolute  ${
						isArabic ? "left-2 sm:left-4 md:left-8 lg:left-12" : "right-2 sm:right-4 md:right-8 lg:right-12"
					} flex items-center`}
				>
					<img
						src="/yemen-minstry.png"
						alt="Emblem"
						className="border-4 border-black w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full"
					/>
				</div>
			</div>
		</section>
  );
};

export default Boffer;
