
function Statistic() {
  return (
    <div id="statistic" className="mb-6 p-6 shadow-black shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white">
      <div className="flex justify-start items-center gap-2 py-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <h3 className="text-2xl font-bold text-black">إحصائيات الطلاب</h3>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 leading-relaxed">
          هنا يمكنك مشاهدة بعض الإحصائيات المتعلقة بالطلاب والمنح الدراسية.
        </p>
        <p className="leading-relaxed p-4 text-black text-xl">
          قريبا.....
        </p>
      </div>
    </div>
  );
}

export default Statistic;
