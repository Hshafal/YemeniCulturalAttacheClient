const UsefulLinks = () => {
  return (
    <div id="useful-links" className="mb-6 p-6 shadow-black shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white">
      <div className="flex justify-start items-center  gap-2 py-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <h3 className="text-xl font-bold text-black z-10">التسجيل في المنح الروسية</h3>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4 relative z-10">
        مجموعة من الروابط المفيدة للطلاب المهتمين بالمنح الدراسية في روسيا.
      </p>
      <ul className="list-disc list-inside text-blue-400 space-y-2 relative z-10">
        <li>
          <a
            href="https://education-in-russia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-300"
          >
            منحة الحكومية الروسية (россотрудничество)
          </a>
        </li>
        <li>
          <a
            href="https://od.globaluni.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-300"
          >
            منحة اولمبياد بين الجامعات (اوبن دورز- OpenDoors)
          </a>
        </li>
        <li>
          <a
            href="/منح_الجامعات_الروسية.pdf"
            download
            className="hover:underline hover:text-blue-300"
          >
            منح من الجامعة نفسها ( اولمبياد جامعية داخلية لطلاب الاجانب)
          </a>
        </li>
        <li>
          <span>
            كيفية التقديم على هذه المنح
          </span>
          <a
            href="https://youtube.com/@yemeniculturalattache-moscow?si=juCYyUeTtSIXybEi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-300 px-2"
          > أضغط هنا</a>
        </li>
      </ul>
    </div>
  );
};

export default UsefulLinks;