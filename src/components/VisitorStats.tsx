import React, { useEffect, useState } from "react";
import myAxios from "../api/myAxios";

// Define the interface for the visit counts
interface VisitCounts {
  day: number;
  month: number;
  total: number;
}

const VisitorStats: React.FC = () => {
  const [visitCounts, setVisitCounts] = useState<VisitCounts | null>(null);

  useEffect(() => {
    const fetchVisitCounts = async () => {
      try {
        const res = await myAxios.get("/visitors/visit-counts");
        setVisitCounts(res.data);
      } catch (err) {
        console.error("Error fetching visit counts:", err);
      }
    };

    fetchVisitCounts();
  }, []);

  if (!visitCounts) {
    return <div className="text-center text-gray-600 py-10">جاري التحميل...</div>;
  }

  return (
    <section className="p-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
        <h2 className="text-lg font-semibold text-center text-gray-800 mb-3">
          إحصائيات الزوار
        </h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-gray-600">اليوم</p>
            <p className="text-lg font-bold">{visitCounts.day}</p>
          </div>
          <div>
            <p className="text-gray-600">الشهر</p>
            <p className="text-lg font-bold">{visitCounts.month}</p>
          </div>
          <div>
            <p className="text-gray-600">إجمالي الزيارات</p>
            <p className="text-lg font-bold">{visitCounts.total}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitorStats;
