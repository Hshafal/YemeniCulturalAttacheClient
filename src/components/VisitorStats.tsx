import React, { useEffect, useState } from "react";
import myAxios from "../api/myAxios";

// Define the interface for the visit counts
interface VisitCounts {
	day: number;
	month: number;
	year: number;
	total: number;
}

const VisitorStats: React.FC = () => {
	const [visitCounts, setVisitCounts] = useState<VisitCounts | null>(null);

	useEffect(() => {
		// Fetch visit counts from the server
		const fetchVisitCounts = async () => {
			try {
				const res = await myAxios.get("/visitors/visit-counts");
				const data: VisitCounts = res.data;
				setVisitCounts(data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchVisitCounts();
	}, []);

	if (!visitCounts) {
		return <div className="text-center py-10">جاري التحميل...</div>;
	}

	return (
		<div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-2">
			<div className="flex justify-between">
				<h2 className="text-md font-semibold text-center ">إحصائيات الزوار</h2>
				<div className="text-right flex">
					<p className="text-gray-600">أمس:</p>
					<p className="text-lg font-bold text-center">{visitCounts.day}</p>
				</div>
				<div className="text-right flex">
					<p className="text-gray-600"> هذا الشهر:</p>
					<p className="text-lg font-bold text-center">{visitCounts.month}</p>
				</div>
				{/* <div className="text-right">
					<p className="text-gray-600">العام الماضي:</p>
					<p className="text-lg font-bold">{visitCounts.year}</p>
				</div> */}
				<div className="text-right">
					<p className="text-gray-600">إجمالي عدد الزيارات:</p>
					<p className="text-lg font-bold">{visitCounts.total}</p>
				</div>
			</div>
		</div>
	);
};

export default VisitorStats;
