import { useState } from "react";

const Registration = () => {
  const [status, setStatus] = useState("new");

  return (
    <div id="registration" className="mb-6 p-6 shadow-red-600 shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white">
      <div className="flex justify-start items-center  gap-2 py-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <h3 className="text-2xl font-bold text-black">التسجيل في الملحقية</h3>
      </div>

      <div className="mb-6 flex gap-4">
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${status === "new" ? "bg-white text-red-500 border border-green-300 " : "bg-red-700 text-white"}`}
          onClick={() => setStatus("new")}
        >
          طالب جديد
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-semibold transition duration-300 ${status === "old" ? "bg-white text-red-500 border border-green-300" : "bg-red-700 text-white"}`}
          onClick={() => setStatus("old")}
        >
          تحديث سجل الطالب
        </button>
      </div>

      {status === "new" ? (
        <>
          <p className="text-lg leading-relaxed mb-4 text-black">اختر نوع التسجيل:</p>
          <div className="flex flex-col gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemywkmMs0GSmqmZ3BZtlRJBOljyNjGt5V294EEQJa3lqjw3A/viewform"
              className="block px-6 py-4 w-full max-w-md bg-white text-red-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              طالب (تبادل ثقافي، مع مساعدة مالية من وزارة التعليم العالي اليمني)
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9c-iA2HmLtJn2ULltBUg8txbPMWhM6_8DKl1eq4kSgAr9Pw/viewform?usp=dialog"
              className="block px-6 py-4 w-full max-w-md bg-white text-red-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              طالب (بدون مساعدة مالية من وزارة التعليم العالي اليمني)
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="text-lg leading-relaxed mb-4 text-black">اختر نوع التحديث:</p>
          <div className="flex flex-col gap-4 ">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSemywkmMs0GSmqmZ3BZtlRJBOljyNjGt5V294EEQJa3lqjw3A/"
              className="block px-6 py-4 w-full max-w-md bg-white text-red-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              طالب (تبادل ثقافي، مع مساعدة مالية من وزارة التعليم العالي اليمني)
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScuJ9bM9uJxFh7Zx7SzDg1E9i1qY9TLZk5Y6GfPOK5E1DqLw/"
              className="block px-6 py-4 w-full max-w-md bg-white text-red-500 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
            >
              طالب (على حسابه الخاص، بدون مساعدة مالية من وزارة التعليم العالي اليمني)
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Registration;
