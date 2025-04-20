
function Statistic() {
	const imagePaths: string[] = [
		"stats/2025/1.png",
		"stats/2025/2.png",
		"stats/2025/3.png",
		"stats/2025/4.png",
		"stats/2025/5.png",
	];
	return (
		<div
			id="statistic"
			className="mb-6 p-6 shadow-black shadow-lg rounded-xl w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto text-white"
		>
			<div className="flex justify-start items-center gap-2 py-4">
				<span className="w-3 h-3 bg-red-500 rounded-full"></span>
				<h3 className="text-2xl font-bold text-black">إحصائيات الطلاب</h3>
			</div>
			<div className="mt-4">
				<p className="text-gray-700 leading-relaxed">
					إحصائيات عن الطلاب المبتعثين عبر وزارة التعليم العالي والبحث العلمي بحسب كشوفات
					الربع الثالث 2023
				</p>
				<ImageGallery images={imagePaths} />
			</div>
		</div>
	);
}

import { useState } from "react";

interface ImageGalleryProps {
	images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const handleImageClick = (image: string) => {
		setSelectedImage(image);
	};

	const handleClose = () => {
		setSelectedImage(null);
	};

	return (
		<div className="container mx-auto p-4">
			<div className="grid grid-cols-2 gap-4">
				{images.map((image, index) => (
					<div key={index} className="cursor-pointer">
						<img
							src={image}
							alt={`Image ${index + 1}`}
							className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow"
							onClick={() => handleImageClick(image)}
						/>
					</div>
				))}
			</div>

			{selectedImage && (
				<div
					className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
					onClick={handleClose}
				>
					<img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
				</div>
			)}
		</div>
	);
};


export default Statistic;
