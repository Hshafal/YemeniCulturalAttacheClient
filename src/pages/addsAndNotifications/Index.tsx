import { useState } from "react";

const LawsAndRegulations = () => {
	return (
		<main>
			<AnnounceCul />
			<AnnounceMin />
		</main>
	);
};

import usePDFs from "../../api/usePDFS";
import { formatDate } from "../../utils";

const AnnounceCul: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { announceCulQuery } = usePDFs();
	const { data, isLoading, isError } = announceCulQuery;

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Server error</h1>;

	return (
		<div
			id="laws-and-regulations"
			className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto"
		>
			<div className="flex gap-1">
				<div className="h-6 w-1 bg-red-500"></div>
				<h3 className="text-xl font-bold text-gray-800 mb-4">تعميمات الملحقية</h3>
			</div>
			<div className="mt-4 space-y-2">
				{data &&
					data.slice(0, 3).map((pdf) => {
						return (
							<a
								key={pdf._id}
								href={pdf.file}
								download
								className="text-blue-400 hover:underline hover:text-blue-300 block"
							>
								{pdf.title} - {formatDate(pdf.date)}
							</a>
						);
					})}
				{isOpen &&
					data &&
					data.slice(3).map((pdf) => {
						return (
							<a
								key={pdf._id}
								href={pdf.file}
								download
								className="text-blue-400 hover:underline hover:text-blue-300 block"
							>
								{pdf.title} - {formatDate(pdf.date)}
							</a>
						);
					})}
				{data && data.length == 0 ? (
					<h1>قريبا</h1>
				) : (
					<button onClick={toggleCollapse} className="text-blue-500 focus:outline-none">
						{isOpen ? "إخفاء" : "إظهار المزيد"}
					</button>
				)}
			</div>
		</div>
	);
};

const AnnounceMin: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { announceMinQuery } = usePDFs();
	const { data, isLoading, isError } = announceMinQuery;

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Server error</h1>;

	return (
		<div
			id="laws-and-regulations"
			className="mb-6 p-6 bg-white shadow-md rounded-lg w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto"
		>
			<div className="flex gap-1">
				<div className="h-6 w-1 bg-red-500"></div>
				<h3 className="text-xl font-bold text-gray-800 mb-4">تعميمات الوزارة</h3>
			</div>
			<div className="mt-4 space-y-2">
				{data &&
					data.slice(0, 3).map((pdf) => {
						return (
							<a
								key={pdf._id}
								href={pdf.file}
								download
								className="text-blue-400 hover:underline hover:text-blue-300 block"
							>
								{pdf.title} - {formatDate(pdf.date)}
							</a>
						);
					})}
				{isOpen &&
					data &&
					data.slice(3).map((pdf) => {
						return (
							<a
								key={pdf._id}
								href={pdf.file}
								download
								className="text-blue-400 hover:underline hover:text-blue-300 block"
							>
								{pdf.title} - {formatDate(pdf.date)}
							</a>
						);
					})}
				{data && data.length == 0 ? (
					<h1>قريبا</h1>
				) : (
					<button onClick={toggleCollapse} className="text-blue-500 focus:outline-none">
						{isOpen ? "إخفاء" : "إظهار المزيد"}
					</button>
				)}
			</div>
		</div>
	);
};

export default LawsAndRegulations;
