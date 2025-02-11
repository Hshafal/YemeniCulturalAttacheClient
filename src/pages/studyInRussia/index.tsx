import Statistic from './Statistic';
import Universities from './Universities';
import UsefulWebsites from './UsefulWebsites';

const OnlineServices = () => {
  return (
    <div className="p-4 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" dir='rtl'>
      <div className='flex gap-1'>
        <div className='h-6 w-1 bg-red-500'></div>
        <h2 className="text-2xl font-bold mb-8">الدراسة في روسيا</h2>
      </div>

      {/* Navbar
      <nav className="mb-6">
        <ul className="flex gap-6">
          <li><a href="#registration" className="text-blue-500">التسجيل في الملحقية </a></li>
          <li><a href="#diploma-attestation" className="text-blue-500">تصديق الوثائق</a></li>
          <li><a href="#useful-links" className="text-blue-500"> المنح الروسية</a></li>
        </ul>
      </nav> */}

      {/* Sections */}
      <div id="registration" className="mb-8">
        <Universities />
      </div>
      <div id="diploma-attestation" className="mb-8">
        <UsefulWebsites />
      </div>
      <div id="useful-links" className="mb-8">
        <Statistic />
      </div>

    </div>
  );
};

export default OnlineServices;
