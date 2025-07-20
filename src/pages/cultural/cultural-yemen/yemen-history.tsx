import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ChevronLeft, Mountain, Waves, Compass } from "lucide-react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const ExpandableSection = ({ title, children, defaultOpen = false }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-10 border-b pb-4">
      <button
        className="flex items-center justify-between w-full text-left text-2xl font-semibold text-gray-800 hover:text-red-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="mt-4 space-y-4">{children}</div>}
    </div>
  );
};

const YemenHistoryPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 text-gray-900">
      <section className="relative h-[50vh] flex items-center justify-center mb-12">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeoJO93jRHIY4RBC5TxvH1DJ-cyDYa-D_S2VQq5EjgREATdZats-Ho-8Ruvy9T0HeWFWg&usqp=CAU')" }}
        ></div>
        <div className="relative z-20 text-white text-right px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
          <Link
            to="/cultural-yemen"
            className="inline-flex items-center text-white mb-4 sm:mb-6 hover:text-red-300 transition-colors"
          >
            <ChevronLeft className="ml-2 h-5 w-5" />
            العودة إلى صفحة الثقافة
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">تاريخ اليمن</h1>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center text-sm sm:text-base">
              <Mountain className="ml-2 h-5 w-5 text-red-300" />
              <span>ممالك اليمن القديمة</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <Waves className="ml-2 h-5 w-5 text-red-300" />
              <span>عصر الإسلام</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <Compass className="ml-2 h-5 w-5 text-red-300" />
              <span>الدولة الحديثة</span>
            </div>
          </div>
        </div>
      </section>

      <ExpandableSection title="🌄 العصر الحجري وما قبل الحضارات">
        <img src="/images/prehistoric-yemen.jpg" alt="Prehistoric Yemen" className="rounded shadow-lg" />
        <p>سكن الإنسان اليمن منذ أكثر من ربع مليون سنة، وأنتج أدوات حجرية بدائية، ثم تطورت أدواته خلال العصر الحجري الحديث.</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>العلاقات مع شرق أفريقيا عبر باب المندب</li>
          <li>تأخر ظهور الزراعة والري حتى الألف الثاني قبل الميلاد</li>
          <li>بداية التنظيمات الاجتماعية والدينية والسياسية</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="🏛️ الممالك الست في اليمن القديم">
        <img src="/images/ancient-yemen-map.png" alt="Ancient Kingdoms" className="rounded shadow-md" />
        <p>شهد اليمن قيام ممالك كبرى مثل سبأ وقتبان ومعين وأوسان وحضرموت وحمير.</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>دولة سبأ (1000 ق.م – 300 م) وعاصمتها مأرب</li>
          <li>حضرموت وشبوة كمراكز تجارية</li>
          <li>قيام دولة مركزية حميرية في القرن الثالث الميلادي</li>
        </ul>
        <div className="relative w-full h-0 pb-[56.25%] mt-4">
          <iframe
            src="https://www.youtube.com/embed/yGJisfL45GE"
            title="تاريخ ممالك اليمن القديمة"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            allowFullScreen
          />
        </div>
      </ExpandableSection>

      <ExpandableSection title="🕌 عصر النبوة وصدر الإسلام">
        <img src="/images/great-mosque-sanaa.jpg" alt="الجامع الكبير صنعاء" className="rounded shadow" />
        <p>اعتنقت قبائل اليمن الإسلام في عهد النبي محمد، وأصبح لليمنيين دور بارز في نشر الإسلام.</p>
        <ul className="list-disc list-inside">
          <li>إسلام همدان على يد علي بن أبي طالب</li>
          <li>مراسلات مع ملوك حمير وحضرموت</li>
          <li>بناء الجامع الكبير بصنعاء فوق قصر غمدان</li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="⚔️ حروب الردة والخلافة الراشدة">
        <p>شارك اليمنيون في الفتوحات الإسلامية وكان لهم دور عسكري رئيسي في العراق والشام ومصر وشمال أفريقيا.</p>
        <img src="/images/military-expansion.jpg" alt="فتوحات اليمنيين" className="rounded-lg shadow-md" />
      </ExpandableSection>

      <ExpandableSection title="🏰 الدول الإسلامية في اليمن (الأموية - العباسية - الصليحية)">
        <p>تعاقبت دول إسلامية على حكم اليمن مثل الدولة الأموية، ثم العباسية، ثم دويلات محلية مثل بني زياد، الصليحيين، والرسوليين.</p>
        <ul className="list-disc list-inside">
          <li>ثورات إباضية في نهاية الدولة الأموية</li>
          <li>استقلال فعلي لبني زياد في زبيد</li>
          <li>الدولة الصليحية بقيادة الملكة أروى بنت أحمد</li>
          <li>الدولة الرسولية (1229-1454م) كانت من أعظم الفترات في تاريخ اليمن الإسلامي</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <img src="/images/queen-arwa.jpg" alt="الملكة أروى" className="rounded shadow" />
          <iframe
            src="https://www.youtube.com/embed/1JSQ7qjD4cs"
            title="الملكة أروى وتاريخ اليمن"
            className="w-full h-64 rounded-lg shadow-lg"
            allowFullScreen
          />
        </div>
      </ExpandableSection>
    </main>
  );
};

export default YemenHistoryPage;
