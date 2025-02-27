import React from 'react';
import { useTranslation } from 'react-i18next';

import usePDFs from "../../api/usePDFS";
import { formatDate } from "../../utils";

const CulturalMagazine: React.FC = () => {
	const { t } = useTranslation();
	const { magazineQuery } = usePDFs();
	const { data, isLoading, isError } = magazineQuery;

	if (isLoading) return <h1>Loading...</h1>;
	if (isError) return <h1>Server error</h1>;

	return (
		<div className="mb-4 w-full max-w-7xl px-4 py-6 md:px-5 lg:px-5 mx-auto">
			<h3 className="text-lg font-semibold">{t("culturalMagazine.title")}</h3>

			{/* Display downloadable links for the first three documents */}
			{data &&
				data.map((doc, index) => (
					<a
						key={index}
						href={doc.file}
						download
						className="block p-2 text-blue-500 underline"
					>
						{doc.title} - {formatDate(doc.date)}
					</a>
				))}

			{/* Display the last document as an embedded PDF with its title */}
			<div className="hidden md:block">
				<p className="p-2">{t("culturalMagazine.description")}</p>
				{data && data.length > 0 && (
					<div>
						<h4 className="text-md font-semibold p-2">{data[0].title}</h4>
						<iframe
							src={data[0].file}
							width="100%"
							height="600px"
							title={data[0].title}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default CulturalMagazine;
