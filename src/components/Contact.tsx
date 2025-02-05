import React from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Support from "../pages/home/Support";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      id: 1,
      icon: <FaMapMarkerAlt className="text-3xl flex-shrink-0 text-gray-700" />,
      label: t("contact.address"),
      value: t("Mytnaya Street, 3, Moscow, 119049"),
      isLink: false,
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-3xl flex-shrink-0 text-orange-500" />,
      label: t("contact.email"),
      value: "mailto:yemculru@gmail.com",
      displayValue: "yemculru@gmail.com",
      isLink: true,
    },
    {
      id: 3,
      icon: <FaPhoneAlt className="text-3xl flex-shrink-0 text-green-600" />,
      label: t("contact.phone"),
      value: "tel:+7 499-246-31-06",
      displayValue: "+7 499-246-31-06",
      isLink: true,
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div id="contacts" className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 border p-4">
        {/* Left Section: Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=37.615713%2C55.727612&z=16&l=map&text=Mytnaya%20Street%2C%203%2C%20Moscow%2C%20119049"
            className="w-full h-96 md:h-full border-0"
            allowFullScreen={true}
            title="Map showing Mytnaya Street, 3, Moscow, 119049"
          ></iframe>
        </div>

        {/* Right Section: Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {contactInfo.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.label}</h3>
                {item.isLink ? (
                  <a href={item.value} className="hover:underline text-blue-600" dir="ltr" target="_blank" rel="noopener noreferrer">
                    {item.displayValue}
                  </a>
                ) : (
                  <p className="text-gray-600" >{item.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-start gap-6 ">
            <FaYoutube className="text-4xl text-red-600" />
            <FaWhatsapp className="text-4xl text-green-500" />
            <FaTelegramPlane className="text-4xl text-blue-500" />
          </div>
        </div>
      </div>
      <Support />

    </div>
  );
};

export default Contact;
