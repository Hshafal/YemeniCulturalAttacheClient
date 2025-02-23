import { useTranslation } from 'react-i18next';

const Speech: React.FC = () => {
  const { t } = useTranslation();

  return (
		<section className="p-4">
			<div className="py-16 w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
				<div className="w-full max-w-5xl">
					<div className="w-full flex flex-col items-start gap-6">
						<img src="./dr_khaled.jpg" alt="" />
						<div className='flex gap-1'>
							<div className="w-1 h-8 bg-red-500"></div>
							<h2 className="text-gray-900 text-3xl font-bold text-center leading-normal">
								{t("speech.title")}
							</h2>
						</div>
						<p className="text-gray-800 text-lg text-center w-full font-bold ">
							{t("speech.content.intro")}
						</p>

						<div className="mt-6 text-gray-800 text-lg font-normal leading-relaxed">
							<p className="mb-4">{t("speech.content.details.intro")}</p>
              
							<h3 className="text-xl font-bold mb-2">
								✔ {t("speech.content.details.objectives.title")}
							</h3>
							<ul className="list-disc pl-6 mb-4">
								<li>{t("speech.content.details.objectives.point1")}</li>
								<li>{t("speech.content.details.objectives.point2")}</li>
								<li>{t("speech.content.details.objectives.point3")}</li>
								<li>{t("speech.content.details.objectives.point4")}</li>
							</ul>
							<h3 className="text-xl font-bold mb-2">
								✔ {t("speech.content.details.services.title")}
							</h3>
							<ul className="list-disc pl-6">
								<li>{t("speech.content.details.services.point1")}</li>
								<li>{t("speech.content.details.services.point2")}</li>
								<li>{t("speech.content.details.services.point3")}</li>
								<li>{t("speech.content.details.services.point4")}</li>
							</ul>
							<p className="mt-6">{t("speech.content.details.conclusion")}</p>
							<p className="mt-4 text-left font-bold">
								{t("speech.content.details.signature")}
							</p>
							<p className="text-left font-bold">
								{t("speech.content.details.position")}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
};

export default Speech;
