import React from "react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  menuItems: Array<{
    id: number;
    label: string;
    title: string;
    path: string;
    submenu?: Array<{ label: string; path: string }>;
  }>;
  selectedTitle: string;
  setSelectedTitle: React.Dispatch<React.SetStateAction<string>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openSubmenu: number | null;
  setOpenSubmenu: React.Dispatch<React.SetStateAction<number | null>>;
  handleClick: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  menuItems,
  selectedTitle,
  setSelectedTitle,
  isMenuOpen,
  setIsMenuOpen,
  openSubmenu,
  setOpenSubmenu,
  handleClick,
}) => {
  return (
    <div
      className={`md:flex md:justify-center md:items-center p-2 md:p-0 bg-gray-100 md:static md:bg-transparent ${
        isMenuOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-col md:flex-row md:gap-4 gap-2 py-2 md:py-0">
        {menuItems.map((item) => (
          <div key={item.id} className="relative group">
            <div
              className={`px-3 py-2 rounded-md text-sm font-black md:text-base flex-1 ${
                selectedTitle === item.title
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-red-500 hover:text-white"
              }`}
              onClick={(e) => {
                if (item.submenu && isMenuOpen) {
                  e.preventDefault();
                  setOpenSubmenu(openSubmenu === item.id ? null : item.id);
                } else {
                  setSelectedTitle(item.title);
                  setIsMenuOpen(false);
                  setOpenSubmenu(null);
                  handleClick(item.path);
                }
              }}
            >
              {item.label}
            </div>
            {item.submenu && (
              <div
                className={`md:absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                  openSubmenu === item.id ? "block" : "hidden md:group-hover:block"
                }`}
              >
                {item.submenu.map((subItem, index) => (
                  <Link
                    key={index}
                    to={subItem.path}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white ${
                      openSubmenu === item.id ? "bg-red-500 text-white" : ""
                    }`}
                    onClick={() => {
                      setSelectedTitle(subItem.label);
                      setIsMenuOpen(false);
                      setOpenSubmenu(null);
                    }}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
