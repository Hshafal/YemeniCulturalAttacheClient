const LawsAndRegulations = () => {
  return (
    <div id="laws-and-regulations" className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className='flex gap-1'>
        <div className='h-6 w-1 bg-red-500'></div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">القوانين واللوائح</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">
        القوانين واللوائح التي يجب على الطلاب معرفتها:
      </p>
      <div className="mt-4 space-y-2">
        <a
          href="/low.pdf"
          download
          className="text-blue-400 hover:underline hover:text-blue-300 block"
        >
          لوائح و قوانين من إدارة الإبتعاث والمنح الدراسية - وزارة التعليم العالي اليمني        </a>
        <a
          href="/lowsFornewstudent.pdf"
          download
          className="text-blue-400 hover:underline hover:text-blue-300 block"
        >
          قوانين و لوائح للطالب المبتعث الجديد في روسيا الإتحادية
        </a>

      </div>
    </div>
  );
};

export default LawsAndRegulations;
