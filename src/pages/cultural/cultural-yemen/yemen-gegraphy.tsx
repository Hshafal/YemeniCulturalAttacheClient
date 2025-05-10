import { Link } from "react-router-dom";
import { ChevronLeft, Mountain, Waves, Compass } from "lucide-react";

export default function GeographyPage() {
  return (
    <div className="min-h-screen px-4 max-w-6xl mx-auto" dir="rtl">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://www.rjtravelagency.com/wp-content/uploads/2023/12/Borders-of-Yemen.jpg')" }}
        ></div>
        <div className="relative z-20 text-white text-right px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-white mb-4 sm:mb-6 hover:text-red-300 transition-colors"
          >
            <ChevronLeft className="ml-2 h-5 w-5" />
            العودة إلى الصفحة الرئيسية
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">جغرافية اليمن</h1>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <div className="flex items-center text-sm sm:text-base">
              <Mountain className="ml-2 h-5 w-5 text-red-300" />
              <span>الجبال والمرتفعات</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <Waves className="ml-2 h-5 w-5 text-red-300" />
              <span>السواحل</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <Compass className="ml-2 h-5 w-5 text-red-300" />
              <span>الصحاري والجزر</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 text-right">
            <div className="prose max-w-none prose-sm sm:prose-base md:prose-lg">
              <h2>أرض متنوعة التضاريس</h2>
              <p>تقع اليمن في موقع استراتيجي وتتميز بتنوع جغرافي بين الجبال والسواحل والصحاري والجزر.</p>

              <div className="my-6 sm:my-8 rounded-xl overflow-hidden">
                <img src="/images/geography-1.jpg" alt="المرتفعات اليمنية" className="w-full h-auto object-cover" />
                <p className="text-sm text-gray-500 mt-2 italic">مناظر الجبال الشاهقة في المرتفعات الغربية</p>
              </div>

              <h2>السواحل: تهامة</h2>
              <p>سهول تهامة ساحلية حارة ورطبة، تشكل منطقة عبور مهمة عبر التاريخ للتجارة والثقافات.</p>

              <h2>المرتفعات الغربية</h2>
              <p>تتميز بزراعة مدرجة وقمم شاهقة مثل جبل النبي شعيب.</p>

              <div className="my-6 sm:my-8 rounded-xl overflow-hidden">
                <img src="/images/geography-2.jpg" alt="الزراعة المدرجة" className="w-full h-auto object-cover" />
                <p className="text-sm text-gray-500 mt-2 italic">الزراعة المدرجة في المرتفعات اليمنية</p>
              </div>

              <h2>الصحراء الشرقية</h2>
              <p>الربع الخالي، منطقة صحراوية قاحلة، تحافظ على التقاليد البدوية.</p>

              <h2>جزر سقطرى</h2>
              <p>أرخبيل بيئي فريد، يحتوي على أنواع لا توجد في أي مكان آخر.</p>

              <div className="my-6 sm:my-8 rounded-xl overflow-hidden">
                <img src="/images/geography-3.jpg" alt="سقطرى" className="w-full h-auto object-cover" />
                <p className="text-sm text-gray-500 mt-2 italic">شجرة دم الأخوين في جزيرة سقطرى</p>
              </div>
            </div>

            {/* Table Section */}
            <div className="mt-10 overflow-x-auto rounded-xl border border-red-200">
              <h3 className="text-xl sm:text-2xl font-bold p-4 bg-red-600 text-white">
                المناطق الجغرافية في اليمن
              </h3>
              <table className="w-full text-right text-sm sm:text-base">
                <thead className="bg-red-50">
                  <tr>
                    <th className="px-4 py-3">المنطقة</th>
                    <th className="px-4 py-3">الخصائص</th>
                    <th className="px-4 py-3">المدن / المعالم</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">تهامة</td>
                    <td className="px-4 py-3">حارة ورطبة</td>
                    <td className="px-4 py-3">الحديدة، المخا</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">المرتفعات الغربية</td>
                    <td className="px-4 py-3">جبال، مناخ معتدل</td>
                    <td className="px-4 py-3">صنعاء، تعز، إب</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">الهضبة الشرقية</td>
                    <td className="px-4 py-3">شبه جافة</td>
                    <td className="px-4 py-3">مأرب، البيضاء</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">الربع الخالي</td>
                    <td className="px-4 py-3">صحراء رملية شاسعة</td>
                    <td className="px-4 py-3">مناطق بدوية</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">سقطرى</td>
                    <td className="px-4 py-3">تنوع نباتي نادر</td>
                    <td className="px-4 py-3">حديبو، غابات دم الأخوين</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <div className="bg-red-600 rounded-xl p-4 sm:p-6 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-black">معلومات سريعة</h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>المساحة: 527,970 كم²</li>
                <li>أعلى قمة: جبل النبي شعيب (3,666 م)</li>
                <li>طول السواحل: 1,906 كم</li>
                <li>سقطرى تحتوي على أكثر من 700 نوع نادر</li>
              </ul>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-3">معرض الصور</h3>
              <div className="grid grid-cols-2 gap-2">
                <img src="/images/geography-4.jpg" alt="الجبال" className="rounded-lg h-24 object-cover w-full" />
                <img src="/images/geography-5.jpg" alt="الساحل" className="rounded-lg h-24 object-cover w-full" />
                <img src="/images/geography-6.jpg" alt="الصحراء" className="rounded-lg h-24 object-cover w-full" />
                <img src="/images/geography-7.jpg" alt="سقطرى" className="rounded-lg h-24 object-cover w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
