import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import myAxios from "../api/myAxios";
import { useState } from "react";
import { toast } from "react-toastify";

const Footer: React.FC = () => {
	const { t } = useTranslation();
	const [email, setEmail] = useState("");
	const { mutate, isPending } = useMutation({
		mutationFn: async ({ email }: { email: string }) => {
			const res = await myAxios.post("/subscribers", { email });
			return res.data;
		},
		onSuccess: () => {
			toast.success("تم ارسال الايميل بنجاح");
			setEmail("");
		},
		onError: (error) => {
			console.log(error);
			toast.error("خطأ في ارسال الايميل");
		},
	});

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (!email.endsWith("@gmail.com")) {
			toast.error("عذراً، ندعم فقط عناوين البريد الإلكتروني من Gmail. سيتم إضافة مزودي بريد آخرين قريباً.");
			return;
		}
		mutate({ email });
	}

	return (
		<footer className="py-4 overflow-hidden">
			<div className="px-5 sm:px-10 md:px-12 lg:px-5 max-w-screen overflow-hidden">
				<div className="p-6 sm:p-10 md:p-14 lg:p-8 rounded-lg bg-gray-100 flex flex-col space-y-6 relative overflow-hidden">
					{/* Background Effects */}
					<div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-red-500 to-black blur-2xl z-10 -top-7 -left-7 opacity-40"></div>
					<div className="absolute w-14 h-14 rounded-full bg-gradient-to-bl from-red-500 to-black blur-2xl z-10 -bottom-7 -right-7 opacity-40"></div>

					{/* Content */}
					<div className="lg:h-full flex flex-col items-center text-center justify-center space-y-8 mx-auto max-w-2xl">
						<h1 className="font-bold text-gray-900 dark:text-black text-2xl">
							{t("footer.title_part_1")}{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-bl from-red-500 to-black dark:from-red-400 dark:to-black">
								500+ {t("footer.title_part_2")}
							</span>{" "}
							{t("footer.title_part_3")}
						</h1>
						<p className="text-gray-700 text-center max-w-xl">{t("footer.description")}</p>

						{/* Subscription Form */}
						<form
							onSubmit={handleSubmit}
							className="w-full flex flex-col sm:items-center sm:flex-row gap-y-3 gap-x-4 max-w-lg mx-auto"
						>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={t("footer.email_placeholder")}
								className="py-3 px-5 rounded-lg  border outline-none w-full text-black"
							/>
							<button
								disabled={isPending}
								type="submit"
								className="py-3 rounded-lg px-6 bg-red-600 dark:bg-red-500 text-white font-medium text-base w-full sm:w-max flex justify-center"
							>
								{isPending ? "جاري الارسال" : t("footer.subscribe_button")}
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Footer Bottom Section */}
			<div className="text-center text-gray-600 dark:text-gray-400 mt-4">
				<div className="text-sm">
					<hr />
					<p className="p-2">© 2025 - {t("footer.rights_reserved")}</p>
					<p>
						تم تطوير الموقع بواسطة
						<span>
							<a
								href="https://gaoba.vercel.app"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline"
							>
								Abdulrahman Gaoba
							</a>
						</span>
						<span> & </span>
						<span>
							<a
								href="https://eskander-taher.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline"
							>
								Eskander
							</a>
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
