import Registration from './Registration';
import DiplomaAttestation from './DiplomaAttestation';
import UsefulLinks from './UsefulLinks';

const OnlineServices = () => {
  return (
    <div className="p-4 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto" dir='rtl'>
      <div className='flex gap-1'>
        <div className='h-6 w-1 bg-red-500'></div>
        <h2 className="text-2xl font-bold mb-4">الخدمات الطلابية</h2>
      </div>

      {/* Navbar */}
      <nav className="mb-6">
        <ul className="flex gap-6">
          <li><a href="#diploma-attestation" className="text-blue-500">تصديق الشهادات</a></li>
          <li><a href="#useful-links" className="text-blue-500">روابط مفيدة</a></li>
          <li><a href="#laws-regulations" className="text-blue-500">القوانين واللوائح</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <div id="registration" className="mb-8">
        <Registration />
      </div>
      <div id="diploma-attestation" className="mb-8">
        <DiplomaAttestation />
      </div>
      <div id="useful-links" className="mb-8">
        <UsefulLinks />
      </div>

    </div>
  );
};

export default OnlineServices;
