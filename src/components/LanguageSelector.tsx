import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const languages = [
    { code: "ar", name: "العربية" },
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowMenu(false);
  };

  return (
    <div className="md:hidden fixed bottom-16 right-4 bg-red-500 text-white p-3 rounded-full shadow-lg cursor-pointer"
      onClick={() => setShowMenu(!showMenu)}>
      <FaGlobe size={20} />
      {showMenu && (
        <div className="absolute bottom-12 right-0 bg-white text-black shadow-md rounded-md py-2">
          {languages.map((lang) => (
            <button key={lang.code} className="block px-4 py-2 hover:bg-gray-200 w-full"
              onClick={() => changeLanguage(lang.code)}>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
