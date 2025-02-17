import ImageSlider from "./ImageSlider"

export default function Page() {
  const images = [
    {
      url: "/activities/week0.jpg",
      alt: "Traditional Middle Eastern village with mud brick buildings and palm trees",
    },
    {
      url: "/activities/week1.jpg",
      alt: "Traditional Middle Eastern village with mud brick buildings and palm trees",
    },
    {
      url: "/activities/week2.jpg",
      alt: "Second slide",
    },
    {
      url: "/activities/week3.jpg",
      alt: "Third slide",
    },
    {
      url: "/activities/week4.jpg",
      alt: "Third slide",
    },
    {
      url: "/activities/week5.jpg",
      alt: "Third slide",
    },
  ]
  
  const Avangard = [
		{
			url: "/activities/avangard1.jpg",
			alt: "Traditional Middle Eastern village with mud brick buildings and palm trees",
		},
		{
			url: "/activities/avangard2.jpg",
			alt: "Second slide",
		},
		{
			url: "/activities/avangard3.jpg",
			alt: "Third slide",
		},
  ];

  const Gopken = [
		{
			url: "/activities/gopken1.jpg",
			alt: "Traditional Middle Eastern village with mud brick buildings and palm trees",
		},
		{
			url: "/activities/gopken2.jpg",
			alt: "Second slide",
		},
		{
			url: "/activities/gopken3.jpg",
			alt: "Third slide",
		},
  ];

  const cere = [
		{
			url: "/cere1.jpg",
			alt: "1",
		},
		{
			url: "/cere2.jpg",
			alt: "2",
		},
		{
			url: "/cere3.jpg",
			alt: "3",
		},
		{
			url: "/cere4.jpg",
			alt: "4",
		},
		{
			url: "/cere5.jpg",
			alt: "5",
		},
  ];

  const cerem = [
		{
			url: "/cerem7.jpg",
			alt: "7",
		},
		{
			url: "/cerem1.jpg",
			alt: "1",
		},
		{
			url: "/cerem2.jpg",
			alt: "2",
		},
		{
			url: "/cerem3.jpg",
			alt: "3",
		},
		{
			url: "/cerem4.jpg",
			alt: "4",
		},
		{
			url: "/cerem5.jpg",
			alt: "5",
		},
		{
			url: "/cerem6.jpg",
			alt: "6",
		},
  ];

  return (
		<div className="min-h-auto py-12 px-4 sm:px-6 lg:px-8 text-black w-full max-w-6xl mx-auto">
			<div className="flex flex-col md:flex-wrap md:flex-row justify-center gap-2 items-start">
				<ImageSlider
					images={images}
					title="أسبوع الطالب العربي"
					description="فعالية أسبوع الطالب العربي في جامعة الصداقة بين الشعوب - موسكو"
					date="16.04.2024"
				/>
				<ImageSlider
					images={Avangard}
					title="مشاركة  الرابطة الطلابية  في فعالية ثقافية بمجمع Авангард"
					description="تم تعريف طلاب المدارس بثقافة الشعب اليمني وتقاليده وأسلوب حياته وأجبنا على أسئلة طلاب المدارس، كما تم تعليمهم الرقص اليمني."
					date="13.12.2024"
				/>
				<ImageSlider
					images={Gopken}
					title="فعالية ثقافة البلدان جامعة القوبكن"
					description="رابطة الطلبة اليمنيين- موسكو تشارك  في  فعالية ثقافة البلدان جامعة القوبكن - تخللت الفعالية العديد من الفقرات التراثية  و الثقافية. "
					date="06.12.2024"
				/>
				<ImageSlider
					images={cere}
					title="احتفالاً خطابياً وفنياً بمناسبة عيد الاستقلال"
					description="بدعم من الملحقية الثقافية اليمنية - نظمت رابطة الطلبة اليمنيين- موسكو احتفالاً خطابياً وفنياً بمناسبة عيد الاستقلال 30 نوفمبر ، تضمنت العديد من الفقرات الفنية التراثية اليمنية ومشاركات عربية متنوعة. و تخلل الحفل ، تكريم الملحقية الثقافية المتميزين علميا والحاصلين على براءة اختراع في مجال تخصصاتهم، و مساهمين في البحوث العلمية."
					date="-"
				/>
				<ImageSlider
					images={cerem}
					title="حفلاً خطابياً وفنياً بمناسبة أعياد الاستقلال"
					description="أقامت رابطة الطلبة اليمنيين في جامعة الصداقة بين الشعوب مع الجالية اليمنية في موسكو، حفلاً خطابياً وفنياً بمناسبة الذكرى 62 لثورة 26 سبتمبر والذكرى 61 لثورة 14 أكتوبر، وسط حضور كبير  من أبناء الجالية اليمنية ، والطلبة اليمنين الدراسين في روسيا ، وبمشاركة رسمية من سفارة الجمهورية اليمنية في روسيا الاتحادية."
					date="-"
				/>
			</div>
		</div>
  );
}

