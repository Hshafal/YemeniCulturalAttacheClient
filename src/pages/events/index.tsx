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
  ]
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
  ]


  return (
    <div className="min-h-auto py-12 px-4 sm:px-6 lg:px-8 text-black w-full max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-center gap-6 items-start">
        <ImageSlider
          images={images}
          title="أسبوع الطالب العربي"
          description="فعالية أسبوع الطالب العربي في جامعة الصداقة بين الشعوب - موسكو"
          date=" 16.04.2024"
        />
        <ImageSlider images={Avangard} title="مشاركة  الرابطة الطلابية  في فعالية ثقافية بمجمع Авангард" description="تم تعريف طلاب المدارس بثقافة الشعب اليمني وتقاليده وأسلوب حياته وأجبنا على أسئلة طلاب المدارس، كما تم تعليمهم الرقص اليمني." date="13.12.2024" />
        <ImageSlider
          images={Gopken}
          title="فعالية ثقافة البلدان جامعة القوبكن"
          description="رابطة الطلبة اليمنيين- موسكو تشارك  في  فعالية ثقافة البلدان جامعة القوبكن - تخللت الفعالية العديد من الفقرات التراثية  و الثقافية. "
          date="06.12.2024"
        />

      </div>
    </div>
  )
}

