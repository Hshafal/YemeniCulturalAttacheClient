import React, { useState } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  id: number;
  label: string;
  title: string;
  path: string;
  submenu?: { label: string; path: string }[];
}

interface MobileNavbarProps {
  isMenuOpen: boolean;
  menuItems: MenuItem[];
  selectedTitle: string;
  setSelectedTitle: (title: string) => void;
  closeMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isMenuOpen,
  menuItems,
  selectedTitle,
  setSelectedTitle,
  closeMenu
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const toggleSubmenu = (id: number) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <div className={`md:hidden p-2 bg-gray-100 ${isMenuOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col gap-2 py-2">
        {menuItems.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between items-center">
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-black ${selectedTitle === item.title
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-red-500 hover:text-white"
                  }`}
                onClick={() => {
                  setSelectedTitle(item.title);
                  closeMenu();
                }}
              >
                {item.label}
              </Link>

              {item.submenu && (
                <button
                  className="text-gray-600 focus:outline-none"
                  onClick={() => toggleSubmenu(item.id)}
                >
                  {openSubmenu === item.id ? "▲" : "▼"}
                </button>
              )}
            </div>

            {/* Submenu */}
            {item.submenu && openSubmenu === item.id && (
              <div className="pl-4 mt-2 space-y-1">
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.path}
                    to={sub.path}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-red-200 rounded-md"
                    onClick={closeMenu}
                  >
                    {sub.label}
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

export default MobileNavbar;
