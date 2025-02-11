const LawsAndRegulations = () => {
  return (
    <main>

      <div id="laws-and-regulations" className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className='flex gap-1'>
          <div className='h-6 w-1 bg-red-500'></div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">تعميمات الملحقية</h3>
        </div>
        <div className="mt-4 space-y-2">
          <a
            href="/تعميم_بخصوص_الطلاب_الواصلين_للمطارات_الروسية1.pdf"
            download
            className="text-blue-400 hover:underline hover:text-blue-300 block"
          >
            تعميم بخصوص الطلاب الواصلين إلى المطارات الروسية
          </a>

        </div>
      </div>

      <div id="laws-and-regulations" className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className='flex gap-1'>
          <div className='h-6 w-1 bg-red-500'></div>
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

export default LawsAndRegulations;
