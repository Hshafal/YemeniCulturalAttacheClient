import React from "react";
import { FaEnvelope, FaPhoneAlt, FaHeadset } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Support: React.FC = () => {
  const { t } = useTranslation();

  const supportInfo = [
    {
      id: 1,
      icon: <FaHeadset className="text-4xl text-blue-600" />,
      label: t("support.tech_support"),
      value: t("24/7 Assistance Available"),
      isLink: false,
    },
    {
      id: 2,
      icon: <FaEnvelope className="text-4xl text-red-500" />,
      label: t("support.email"),
      value: "mailto:yemculru@gmail.com",
      displayValue: "yemculru@gmail.com",
      isLink: true,
    },
    {
      id: 3,
      icon: <FaPhoneAlt className="text-4xl text-green-600" />,
      label: t("support.phone"),
      value: "tel:+7 968 625-77-72",
      displayValue: "+7 968 625-77-72",
      isLink: true,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 border-2 border-red-500 rounded-lg">
      <div className='flex gap-1 items-center justify-start '>
        <div className='w-1 h-8 bg-red-500'></div>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 underline">
          {t("support.title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Image */}
        <div className="flex justify-center mb-8 md:mb-0 ">
          <img
            src="/supportImage.svg"
            alt="Technical Support"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Section - Support Information */}
        <div className="space-y-6 p-8">
          {supportInfo.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              {item.icon}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-2" dir="rtl">
                  {item.label}
                </h3>
                {item.isLink ? (
                  <a href={item.value} className="text-blue-600 hover:underline" dir="ltr">
                    {item.displayValue}
                  </a>
                ) : (
                  <p className="text-gray-600" dir="ltr">{item.value}</p>
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
