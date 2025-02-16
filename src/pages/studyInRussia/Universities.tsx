
const Universities = () => {
  return (
		<div
			id="registration"
			className="mb-6 p-6 shadow-red-600 shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white"
		>
			<div className="flex justify-start items-center gap-2 py-4">
				<span className="w-3 h-3 bg-red-500 rounded-full"></span>
				<h3 className="text-2xl font-bold text-black">دليل الجامعات الروسية المعتمدة</h3>
			</div>
			<div className="mt-4">
				<a href="/دليل_الجامعات_لطالب_المبتعث.pdf" download className="text-blue-400 hover:underline hover:text-blue-300">
					تحميل دليل الجامعات لطالب المبتعث
				</a>
			</div>
		</div>
  );
};

export default Universities;
