import { useState } from "react";

const LawsAndRegulations = () => {
  return (
    <main>
      <CollapsibleComponent />

      <div
        id="laws-and-regulations"
        className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto"
      >
        <div className="flex gap-1">
          <div className="h-6 w-1 bg-red-500"></div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">تعميمات الوزارة</h3>
        </div>
        <div className="mt-4 space-y-2 text-lg ">
          {/* <a
            href=""
            download
            className="text-blue-400 hover:underline hover:text-blue-300 block"
          > */}
          قريبا.....
          {/* </a> */}
        </div>
      </div>
    </main>
  );
};

const CollapsibleComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="laws-and-regulations"
      className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto"
    >
      <div className="flex gap-1">
        <div className="h-6 w-1 bg-red-500"></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">تعميمات الملحقية</h3>
      </div>
      <div className="mt-4 space-y-2">
        <a
          href="/تعميم_بشأن_إجازة_الفطر_المبارك_1445_هـ 1.pdf"
          download
          className="text-blue-400 hover:underline hover:text-blue-300 block"
        >
          إعلان عن إطلاق حصاد أول 2024  من المجلة الثقافية رواق مبتعث
        </a>
        <a
          href="/إعلان_عن_ضرورة_تسجيل_الطلاب_في_الاستبيان_الالكتروني_الدارسين_في_روسيا_و رابطة_الدول_المستقلة_غير المبتعثين_من_الوزارة.pdf"
          download
          className="text-blue-400 hover:underline hover:text-blue-300 block"
        >
          إعلان عن ضرورة تسجيل الطلاب في الاستبيان الالكتروني الدارسين في روسيا ورابطة الدول المستقلة غير المبتعثين من الوزارة
        </a>
        <a
          href="/announcement.pdf"
          download
          className="text-blue-400 hover:underline hover:text-blue-300 block"
        >
          إعلان عن تدشين الموقع الالكتروني للملحقية الثقافية اليمنية -موسكو
        </a>
        <a
          href="/اعلان_لطلاب_غير_قادرين_العودة_لبلد_الدراسة_2024.pdf"
          download
          className="text-blue-400 hover:underline hover:text-blue-300 block"
        >
          اعلان للطلاب غير القادرين على العودة لبلد الدراسة
        </a>
        {isOpen && (
          <>
            <a
              href="/اعلان_عن_جمع_طلاب_المتفوقين_2024.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان عن جمع الطلاب المتفوقين
            </a>
            <a
              href="/اعلان_بخصوص_ارسال_سبرافكا_لطالب_المبتعث_سبمتبر_2024.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان بخصوص ارسال سبرافكا للطالب المبتعث
            </a>
            <a
              href="/إعلان_عن_إيقاف_مؤقت_للمحقية_بسبب_نقل_المبنى.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان عن ايقاف مؤقت للملحقية بسبب نقل المبنى
            </a>
            <a
              href="/إعلان_لطلاب_الحاصلين_على_مقاعد_مجانية_2024-2025م.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان للطلاب الحاصلين على مقاعد مجانية 2024-2025
            </a>
            <a
              href="/تعميم_ببدء_صرف_المساعدة_للربع_الاول_2023م.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              تعميم ببدء صرف المساعدة المالية للربع الأول 2023
            </a>
            <a
              href="/اعلان_بخصوص_حصر_بيانات_طلاب_التبادل_الثقافي_2024-2025م_مع_الاستمارة.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان بخصوص حصر بيانات طلاب التبادل الثقافي 2024-2025 مع الاستمارة
            </a>
            <a
              href="/اعلان_بخصوص_صور_الدبلومات.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان بخصوص صور الدبلومات
            </a>
            <a
              href="/_4إعلان_هام_بخصوص_آلية_صرف_الربع_الاول_2023م.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان هام بخصوص آلية صرف الربع الاول 2023
            </a>
            <a
              href="/لنشر_البحوث_اعلان_لطلاب_الدراسات_العليا 3.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              اعلان لطلاب الدراسات العليا لنشر البحوث
            </a>
            <a
              href="/تعميم_بخصوص_الطلاب_الواصلين_إلى_المطارات_الروسية.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              تعميم بخصوص الطلاب الواصلين إلى المطارات الروسية
            </a>

            <a
              href="/تنويه_بإرسال_صورة_جوز_السفر_وصورة_تذكرة_للجامعة_المتوجه_إليها_الطالب_قبل_السفر_إلى_روسيا2.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              تنويه بإرسال صورة جوز السفر وصورة تذكرة للجامعة المتوجه إليها الطالب قبل السفر إلى روسيا.pdf
            </a>
            <a
              href="/تعميم_بشأن_إجازة_الفطر_المبارك_1445_هـ 1.pdf"
              download
              className="text-blue-400 hover:underline hover:text-blue-300 block"
            >
              تعميم بشأن إجازة الفطر المبارك 1445 هـ
            </a>
          </>
        )}
        <button onClick={toggleCollapse} className="text-blue-500 focus:outline-none">
          {isOpen ? "إخفاء" : "إظهار المزيد"}
        </button>
      </div>
    </div>
  );
};

export default LawsAndRegulations;
