import type React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ChevronDown, ChevronRight } from "lucide-react"

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [selectedTitle, setSelectedTitle] = useState(t("navbar.home"))
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [currentFlag, setCurrentFlag] = useState("")
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null)
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null)

  const menuItems = [
    {
      id: 1,
      label: t("navbar.home"),
      title: t("navbar.home"),
      path: "/",
    },
    {
      id: 2,
      label: t("navbar.about"),
      title: t("navbar.about"),
      path: "/almoulhaqia",
      submenu: [
        { label: t("navbar.about_sub.overview"), path: "/almoulhaqia" },
        { label: t("navbar.about_sub.advisor"), path: "/speech" },
      ],
    },
    {
      id: 3,
      label: t("navbar.services"),
      title: t("navbar.services"),
      path: "/services",
      submenu: [
        {
          label: t("navbar.services_sub.students"),
          path: "/services",
        },
        {
          label: t("navbar.services_sub.study_in_russia"),
          path: "/study-in-russia",
        },
        {
          label: t("navbar.services_sub.regulations"),
          path: "/regulations"
        },
      ],
    },
    {
      id: 4,
      label: t("navbar.activities"),
      title: t("navbar.activities"),
      path: "/activities",
      submenu: [
        { label: t("navbar.activities_sub.events"), path: "/activities" },
        { label: t("navbar.activities_sub.cultural"), path: "/cultural-events" },
        { label: t("navbar.activities_sub.magazine"), path: "/magazine" },
      ],
    },
    {
      id: 5,
      label: t("navbar.announcements"),
      title: t("navbar.announcements"),
      path: "/announcements",
      // submenu: [
      //   { label: t("navbar.announcements_sub.office"), path: "/office-circulars" },
      //   { label: t("navbar.announcements_sub.ministry"), path: "/ministry-circulars" },
      // ],
    },
    {
      id: 6,
      label: t("navbar.contact"),
      title: t("navbar.contact"),
      path: "/contact",
    },
  ];

  const languages = [
    { code: "ar", name: "العربية", flag: "flag-icon-ye" },
    { code: "en", name: "English", flag: "flag-icon-gb" },
    { code: "ru", name: "Русский", flag: "flag-icon-ru" },
  ]

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    localStorage.setItem("selectedLanguage", languageCode)
    const selectedFlag = languages.find((lang) => lang.code === languageCode)?.flag || ""
    setCurrentFlag(selectedFlag)
    setIsLanguageMenuOpen(false)
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || i18n.language || "en"
    i18n.changeLanguage(savedLanguage)
    const initialFlag = languages.find((lang) => lang.code === savedLanguage)?.flag || "flag-icon-gb"
    setCurrentFlag(initialFlag)
  }, [i18n])

  const handleSubmenuToggle = (id: number) => {
    if (window.innerWidth < 768) {
      setOpenSubmenu(openSubmenu === id ? null : id)
    }
  }

  const handleMouseEnter = (id: number) => {
    if (window.innerWidth >= 768) {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
        setCloseTimeout(null)
      }
      setOpenSubmenu(id)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timeout = setTimeout(() => {
        setOpenSubmenu(null)
      }, 300) // 300ms delay before closing
      setCloseTimeout(timeout)
    }
  }

  const handleMenuItemClick = (e: React.MouseEvent, item: (typeof menuItems)[0]) => {
    if (window.innerWidth < 768 && item.submenu) {
      e.preventDefault()
      handleSubmenuToggle(item.id)
    } else {
      setSelectedTitle(item.title)
      setIsMenuOpen(false)
    }
  }

  return (
    <div
      dir="ltr"
      className="sticky md:relative top-0 z-10 bg-cover bg-center max-w-7xl px-4 md:px-5 lg:px-5 mx-auto bg-white"
    >
      <nav className="w-full py-2 md:pb-4 pb-1 border-b-2 text-white">
        <div className="flex justify-between md:justify-center gap-8 items-center px-4 py-3 md:py-4 md:px-6">
          <img src="/Yemen.png" alt="Logo" className="md:h-12 h-8 w-auto" />

          <div className="hidden md:block">
            <div className="text-center flex flex-col items-center">
              <h1 className="text-md md:text-xl font-black text-black md:w-auto">الملحقية الثقافية اليمنية - موسكو</h1>
              <p className="text-md font-black hidden md:block mt-2 text-slate-600">
                Йеменское культурное Атташе - Москва
              </p>
            </div>
          </div>

          <div className="block md:hidden text-black text-center text-md font-black">{t("navbar.logo.subtitle")}</div>

          <div className="flex items-center space-x-4 relative">
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:flex md:justify-center md:items-center md:p-0 bg-gray-100 md:bg-transparent ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          <div
            className={`flex flex-col md:flex-row md:gap-4 py-2 md:py-0 ${i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
              }`}
          >
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="relative w-full md:w-auto"
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center w-full">
                  <Link
                    to={item.path}
                    className={`flex-grow block px-4 py-2 md:px-3 md:py-2 text-sm font-black md:text-base md:rounded-md ${selectedTitle === item.title
                      ? "bg-red-500 text-white"
                      : "bg-white text-gray-700 md:border md:border-gray-300 hover:bg-red-500 hover:text-white"
                      }`}
                    onClick={(e) => handleMenuItemClick(e, item)}
                  >
                    <span className="flex items-center justify-between w-full">
                      {item.label}
                      {item.submenu && (
                        <>
                          <ChevronDown className="hidden md:block w-4 h-4" />
                          <ChevronRight
                            className={`md:hidden w-4 h-4 transition-transform duration-200 ${openSubmenu === item.id ? "rotate-90" : ""
                              }`}
                          />
                        </>
                      )}
                    </span>
                  </Link>
                </div>
                {item.submenu && openSubmenu === item.id && (
                  <div
                    className={`w-full md:absolute md:left-0 md:top-full md:w-48 bg-white ${window.innerWidth < 768 ? "" : "mt-0 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                      }`}
                    onMouseEnter={() => {
                      if (closeTimeout) {
                        clearTimeout(closeTimeout)
                        setCloseTimeout(null)
                      }
                    }}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {item.submenu.map((subItem, index) => (
                        <Link
                          key={index}
                          to={subItem.path}
                          className="block w-full px-6 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setOpenSubmenu(null)
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

