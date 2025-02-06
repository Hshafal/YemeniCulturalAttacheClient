import React from "react";
import { FaEnvelope, FaPhoneAlt, FaHeadset } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Support: React.FC = () => {
  const { t } = useTranslation();

  const supportInfo = [
    {
      id: 1,
      icon: <FaHeadset className="text-3xl text-blue-600" />,
      label: t("support.tech_support"),
      value: t("24/7 Assistance Available"),
      isLink: false,
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-3xl text-red-500" />,
      label: t("support.email"),
      value: "mailto:yemculru@gmail.com",
      displayValue: "yemculru@gmail.com",
      isLink: true,
    },
    {
      id: 3,
      icon: <FaPhoneAlt className="text-3xl text-green-600" />,
      label: t("support.phone"),
      value: "tel:+7 968 625-77-72",
      displayValue: "+7 968 625-77-72",
      isLink: true,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 border-2 border-red-500 rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-8 bg-red-500"></div>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">{t("support.title")}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image Section */}
        <div className="flex justify-center mb-6 sm:mb-0">
          <img src="/supportImage.svg" alt="Support" className="w-48 sm:w-56 lg:w-72" />
        </div>

        {/* Support Information Section */}
        <div className="space-y-6 sm:space-y-8">
          {supportInfo.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              {item.icon}
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-gray-800">{item.label}</h3>
                {item.isLink ? (
                  <a href={item.value} className="text-blue-600 hover:underline" dir="ltr">
                    {item.displayValue}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
