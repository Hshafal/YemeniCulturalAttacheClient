import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedTitle, setSelectedTitle] = useState(t("navbar.home"));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState("");


  const menuItems = [
    { id: 1, label: t("navbar.home"), title: t("navbar.home"), path: "/" },
    { id: 2, label: t("navbar.about"), title: t("navbar.about"), path: "/almoulhaqia" },
    { id: 3, label: t("navbar.services"), title: t("navbar.services"), path: "/services" },
    { id: 4, label: t("navbar.activities"), title: t("navbar.activities"), path: "/activities" },
    { id: 5, label: t("navbar.announcements"), title: t("navbar.announcements"), path: "/announcements" },
    { id: 6, label: t("navbar.contact"), title: t("navbar.contact"), path: "/contact" },
  ];

  const languages = [
    { code: "ar", name: "العربية", flag: "flag-icon-ye" },
    { code: "en", name: "English", flag: "flag-icon-gb" },
    { code: "ru", name: "Русский", flag: "flag-icon-ru" },
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem("selectedLanguage", languageCode);
    const selectedFlag = languages.find((lang) => lang.code === languageCode)?.flag || "";
    setCurrentFlag(selectedFlag);
    setIsLanguageMenuOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || i18n.language || "ar";
    i18n.changeLanguage(savedLanguage);
    const initialFlag = languages.find((lang) => lang.code === savedLanguage)?.flag || "flag-icon-ye";
    setCurrentFlag(initialFlag);
  }, [i18n]);

  return (
		<div
			dir="ltr"
			className="sticky md:relative top-0 z-10 bg-cover bg-center  max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg-white"
			// style={{
			//   backgroundImage: "url('/bg2.jpeg')",
			// }}
		>
			{/* Navbar Section */}
			<nav className="w-full py-2 md:pb-4 pb-1 border-b-2 text-white">
				<div className="flex justify-between md:justify-center gap-8 items-center px-4 py-3 md:py-4 md:px-6">
					{/* Logo */}
					<img src="/Yemen.png" alt="Logo" className="md:h-12 h-8 w-auto" />

					{/* Title and Subtitle */}
					<div className="hidden md:block">
						<div className="text-center flex flex-col items-center">
							<h1 className="text-md md:text-xl font-bold text-black md:w-auto">
								الملحقية الثقافية اليمنية - موسكو
							</h1>
							<p className="text-md font-bold hidden md:block mt-2 text-slate-600">
								Йеменское культурное Атташе - Москва
							</p>
						</div>
					</div>

          <div className="block md:hidden text-black text-center font-bold">
                {t("navbar.logo.subtitle")}
          </div>

					{/* Burger Menu and Language Selector */}
					<div className="flex items-center space-x-4 relative ">
						<button
							title="language name"
							onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
							className="text-red-600 text-lg flex items-center justify-center relative"
						>
							<span className={`flag-icon ${currentFlag} text-xl`}></span>
						</button>

						{isLanguageMenuOpen && (
							<div className="absolute right-6 md:right-0 top-full w-28 bg-white rounded-md shadow-lg z-20">
								{languages.map((lang) => (
									<button
										key={lang.code}
										onClick={() => changeLanguage(lang.code)}
										className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-red-200"
									>
										{lang.name}
									</button>
								))}
							</div>
						)}

						<button
							title="menu"
							className="md:hidden text-black focus:outline-none"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Navigation Menu */}
				<div
					className={`md:flex md:justify-center md:items-center p-2 md:p-0 bg-gray-100 md:static md:bg-transparent ${
						isMenuOpen ? "block" : "hidden"
					}`}
				>
					{/* <div className="flex flex-col md:flex-row-reverse "> */}
					<div
						className={`flex flex-col md:flex-row md:gap-4 gap-2 py-2 md:py-0 ${
							i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
						}`}
					>
						{menuItems.map((item) => (
							<Link
								key={item.id}
								to={item.path}
								className={`px-3 py-2 rounded-md text-sm font-medium md:text-base ${
									selectedTitle === item.title
										? "bg-red-500 text-white"
										: "bg-white text-gray-700 border border-gray-300 hover:bg-red-500 hover:text-white"
								}`}
								onClick={() => {
									setSelectedTitle(item.title);
									setIsMenuOpen(false);
								}}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</div>
  );
};

export default Navbar;
