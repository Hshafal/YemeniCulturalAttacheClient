const AdditionalResources = () => {
  return (
    <div id="additional-resources" className="mb-6 p-6 shadow-orange-200 shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white">
      <div className="flex justify-start items-center gap-2 py-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <h3 className="text-2xl font-bold text-black">مواقع مفيدة</h3>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-gray-700 leading-relaxed">
          مجموعة من الروابط المفيدة للطلاب الدارسين في روسيا.
        </p>
        <ul className="list-disc list-inside text-blue-400 space-y-2">
          <li>
            <a
              href="http://www.moheye.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              موقع وزارة التعليم العالي اليمني
            </a>
          </li>
          <li>
            <a
              href="https://minobrnauki.gov.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              موقع وزارة التعليم العالي الروسي
            </a>
          </li>
          <li>
            <a
              href="https://rs.gov.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              وكالة روسساترودنيتشستفا (للمنح الحكومة الروسية)
            </a>
          </li>
          <li>
            <a
              href="https://studyinrussia.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              بوابة "Study in Russia"
            </a>
          </li>
          <li>
            <a
              href="https://openedu.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              منصة "Open Education" (للتعلم الإلكتروني)
            </a>
          </li>
          <li>
            <a
              href="https://ruspeach.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              لتعليم اللغة الروسية - Ruspeach
            </a>
          </li>
          <li>
            <a
              href="https://learnrussian.rt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              لتعليم اللغة الروسية - Learn Russian RT
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default AdditionalResources;
