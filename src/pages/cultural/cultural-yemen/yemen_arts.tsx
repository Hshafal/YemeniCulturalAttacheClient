import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Music, Users, Palette, MapPin } from "lucide-react"


interface DanceItem {
  id: string
  title: string
  description: string
  image: string
  region: string
  details: {
    performers: string
    occasions: string[]
    instruments: string[]
    history: string
  }
  videoUrl?: string
}

interface ArtItem {
  id: string
  title: string
  description: string
  image: string
  region: string
  details: {
    materials: string[]
    techniques: string[]
    significance: string
  }
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com.*[?&]v=|youtu\.be\/)([^&]+)/)
  return match ? match[1] : null
}

const dances: DanceItem[] = [
  {
    id: "baraa",
    title: "البرع",
    description:
      "رقصة البرع هي واحدة من أشهر الرقصات التقليدية اليمنية، تؤدى بشكل رئيسي في المرتفعات الشمالية. وهي رقصة للرجال تحاكي القتال، حيث يلوح الراقصون بالجنابي (خناجر منحنية) أو العصي أثناء التحرك على إيقاع الطبول والإنشاد.",
    image: "https://irayemc.org/wp-content/uploads/2022/09/%D8%A8%D8%B1%D8%B9-%D9%8A%D9%85%D9%86%D9%8A.jpg",
    region: "المرتفعات الشمالية",
    details: {
      performers: "رجال",
      occasions: ["احتفالات", "أعراس", "مناسبات قبلية"],
      instruments: ["طبول", "مزمار", "إنشاد"],
      history:
        "تعود رقصة البرع إلى قرون مضت، وهي تعبر عن الشجاعة والفروسية في الثقافة اليمنية. كانت تؤدى قديماً قبل المعارك لرفع معنويات المقاتلين، وتطورت لتصبح جزءاً من الاحتفالات والمناسبات الاجتماعية.",
    },
    videoUrl: "https://youtu.be/7kAqdOOQYvs?si=-yxxie6o1JGu7Yxu",
  },
  {
    id: "liwa",
    title: "الليوا",
    description:
      "رقصة الليوا شائعة في منطقة تهامة الساحلية. تتميز بحركات الراقصين على إيقاعات الطبول والمزمار، مع تأثيرات من التقاليد الأفريقية الشرقية التي تعكس الروابط التاريخية عبر البحر الأحمر.",
    image: "/images/dance-liwa.jpg",
    region: "تهامة (المنطقة الساحلية)",
    details: {
      performers: "رجال ونساء (في مجموعات منفصلة)",
      occasions: ["احتفالات موسمية", "أعراس", "مناسبات دينية"],
      instruments: ["طبول", "مزمار", "صنوج"],
      history:
        "تعكس رقصة الليوا التبادل الثقافي بين اليمن وشرق أفريقيا عبر قرون من التجارة والهجرة. تحمل إيقاعاتها وحركاتها تأثيرات أفريقية واضحة، وهي جزء من تراث المناطق الساحلية المتنوع.",
    },
    videoUrl: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: "zafan",
    title: "الزفن",
    description:
      "الزفن هو أسلوب رقص تقليدي يمني يؤدى في مناطق مختلفة من البلاد، مع اختلافات إقليمية في الأسلوب والإيقاع. يتميز بحركات منسقة للقدمين والجسم، ويؤدى عادة في مجموعات.",
    image: "/images/dance-zafan.jpg",
    region: "مناطق متعددة",
    details: {
      performers: "رجال (غالباً)",
      occasions: ["أعراس", "احتفالات", "مناسبات اجتماعية"],
      instruments: ["طبول", "مزمار", "عود", "إنشاد"],
      history:
        "الزفن هو مصطلح يشمل عدة أنماط من الرقص التقليدي في اليمن، تختلف تفاصيله من منطقة لأخرى. يعتبر وسيلة للتعبير عن الفرح والاحتفال في المناسبات المختلفة.",
    },
    videoUrl: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: "women-dance",
    title: "رقصات النساء التقليدية",
    description:
      "للنساء اليمنيات رقصاتهن التقليدية الخاصة، التي تؤدى غالباً في الأعراس والتجمعات النسائية الأخرى. تختلف هذه الرقصات حسب المنطقة لكنها تتضمن عادة حركات رشيقة للذراعين والجسم أثناء ارتداء الملابس التقليدية.",
    image: "/images/dance-women.jpg",
    region: "جميع أنحاء اليمن",
    details: {
      performers: "نساء",
      occasions: ["أعراس", "احتفالات نسائية", "مناسبات عائلية"],
      instruments: ["طبول صغيرة", "دفوف", "غناء نسائي"],
      history:
        "تعتبر رقصات النساء جزءاً مهماً من التراث الثقافي اليمني، وتتوارثها الأجيال عبر التقليد والممارسة. في بعض المناطق، ترقص النساء بجرار متوازنة على رؤوسهن، مما يظهر المهارة والرشاقة.",
    },
    videoUrl: "https://www.youtube.com/watch?v=example4",
  },
]


const instruments = [
  {
    id: "qanbus",
    name: "القنبوس",
    description: "آلة وترية تشبه العود لكنها أقدم منه وفريدة لليمن",
    image: "/images/instrument-qanbus.jpg",
  },
  {
    id: "mizmar",
    name: "المزمار",
    description: "آلة نفخ شائعة في المناطق الساحلية",
    image: "/images/instrument-mizmar.jpg",
  },
  {
    id: "drums",
    name: "الطبول",
    description: "مجموعة متنوعة من الطبول تستخدم في مختلف الرقصات والاحتفالات",
    image: "/images/instrument-drums.jpg",
  },
  {
    id: "sahn",
    name: "الصحن النحاسي",
    description: "ألواح نحاسية تستخدم كآلات إيقاعية",
    image: "/images/instrument-sahn.jpg",
  },
]

export default function FolkArtsPage() {
  const [selectedDance, setSelectedDance] = useState<DanceItem | null>(null)
  const [selectedArt, setSelectedArt] = useState<ArtItem | null>(null)

  return (
    <div className="min-h-screen px-4 max-w-6xl mx-auto">
      {/* Hero Section with Video Background */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.alquds.co.uk/wp-content/uploads/2019/06/%D9%85%D9%86-%D8%A7%D9%84%D8%B1%D9%82%D8%B5%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%D8%A9-3-1.jpg"
        >
          <source src="/videos/folk-dance.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img
            src="https://www.alquds.co.uk/wp-content/uploads/2019/06/%D9%85%D9%86-%D8%A7%D9%84%D8%B1%D9%82%D8%B5%D8%A7%D8%AA-%D8%A7%D9%84%D8%B4%D8%B9%D8%A8%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%D8%A9-3-1.jpg"
            alt="الفنون الشعبية اليمنية"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-20">
          <Link to="/cultural-yemen" className="inline-flex items-center text-white mb-6 hover:text-red-400 transition-colors">
            <ChevronRight className="ml-1 h-5 w-5" />
            العودة إلى صحفة الثقافة
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            الموسيقى والرقص اليمني
          </h1>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex items-center">
              <Music className="ml-2 h-5 w-5 text-red-400" />
              <span>موسيقى تقليدية</span>
            </div>
            <div className="flex items-center">
              <Users className="ml-2 h-5 w-5 text-red-400" />
              <span>رقصات شعبية</span>
            </div>
            <div className="flex items-center">
              <Palette className="ml-2 h-5 w-5 text-red-400" />
              <span>أدوات موسيقية</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">تراث فني نابض بالحياة</h2>
            <p className="text-lg text-gray-700 mb-8">
              الفنون الشعبية والرقص هي مكونات أساسية من الهوية الثقافية اليمنية، تعكس تنوع المناطق التاريخية للبلاد،
              والروايات التاريخية، والقيم الاجتماعية. تلعب هذه التعبيرات الفنية دوراً حاسماً في الاحتفالات والمناسبات
              والتجمعات المجتمعية.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex p-1 bg-red-100 rounded-lg">
                <button
                  className="text-red-700 hover:text-red-900 hover:bg-red-200 rounded-md px-4 py-2"
                  onClick={() => document.getElementById("traditional-dances")?.scrollIntoView({ behavior: "smooth" })}
                >
                  الرقصات التقليدية
                </button>
                <button
                  className="text-red-700 hover:text-red-900 hover:bg-red-200 rounded-md px-4 py-2"
                  onClick={() => document.getElementById("music")?.scrollIntoView({ behavior: "smooth" })}
                >
                  الموسيقى            
                </button>
                <button
                  className="text-red-700 hover:text-red-900 hover:bg-red-200 rounded-md px-4 py-2"
                  onClick={() => document.getElementById("musical-instruments")?.scrollIntoView({ behavior: "smooth" })}
                >
                  الآلات الموسيقية
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Dances Section */}
      <section id="traditional-dances" className="py-16 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <div className="h-0.5 flex-grow bg-red-200"></div>
            <h2 className="text-3xl font-bold px-6 text-red-800">الرقصات التقليدية</h2>
            <div className="h-0.5 flex-grow bg-red-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dances.map((dance) => (
              <div
                key={dance.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedDance(dance)}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                    <img
                      src={dance.image || "/placeholder.svg"}
                      alt={dance.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button className="bg-white text-red-800 hover:bg-red-100">عرض التفاصيل</button>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col">
                    <div className="flex items-center text-sm text-red-600 mb-1">
                      <MapPin className="h-3.5 w-3.5 ml-1" />
                      <span>{dance.region}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{dance.title}</h3>
                    <p className="text-gray-700 mb-4 flex-grow">{dance.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="bg-red-100 text-red-800 rounded-full px-2 py-0.5">
                        {dance.details.performers}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Musical Instruments Section */}
      <section id="musical-instruments" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">الآلات الموسيقية التقليدية</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {instruments.map((instrument) => (
              <div
                key={instrument.id}
                className="bg-red-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={instrument.image || "/placeholder.svg"}
                    alt={instrument.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{instrument.name}</h3>
                  <p className="text-gray-600">{instrument.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-800 text-white rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <img
                  src="/images/music-ensemble.jpg"
                  alt="فرقة موسيقية يمنية تقليدية"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-2/3 md:pr-8" id="music">
                <h3 className="text-2xl font-bold mb-4">الموسيقى اليمنية التقليدية</h3>
                <p className="mb-4">
                  تمثل الموسيقى اليمنية أحد أقدم وأغنى التقاليد الموسيقية في شبه الجزيرة العربية، بأساليب متميزة تختلف
                  عبر مناطق البلاد المختلفة. تم الحفاظ على هذا التراث الموسيقي من خلال التقاليد الشفهية ويستمر في لعب
                  دور حيوي في الهوية الثقافية اليمنية.
                </p>
                <p>
                  تشمل الأنماط الموسيقية الرئيسية الغناء الصنعاني من منطقة العاصمة، والغناء الحضرمي من منطقة حضرموت،
                  وأنماط متنوعة من الموسيقى الشعبية في المناطق الساحلية والريفية. تصاحب هذه الموسيقى الرقصات التقليدية
                  والاحتفالات والمناسبات الاجتماعية في جميع أنحاء اليمن.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Yemeni Music Audio Showcase */}
<section className="py-16 bg-gradient-to-r from-yellow-50 to-red-50">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-10">
      <h2 className="text-3xl font-bold text-red-800 mb-4">عينة من الموسيقى اليمنية</h2>
      <p className="text-gray-700 text-lg">
        استمع إلى مقطع من الغناء الصنعاني التقليدي، أحد أرقى أشكال الموسيقى اليمنية المعروفة بشعرها العميق وأنغامها الرقيقة المصاحبة لآلة القنبوس.
      </p>
    </div>
    <div className="flex flex-col gap-2 w-full">
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto w-full">
      <h3 className="text-xl font-bold text-red-700 mb-2">مقطوعة من الغناء الصنعاني - بصوت تقليدي</h3>
      <audio controls className="w-full">
        <source src="https://audio.com/sypmusic/audio/yorkshire-area-2nd-section-winning-performance-south-yorkshire-police-band" type="audio/mp3" />
        المتصفح لا يدعم تشغيل الصوت.
      </audio>
    </div>
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto w-full">
      <h3 className="text-xl font-bold text-red-700 mb-2">مقطوعة من الغناء الصنعاني - بصوت تقليدي</h3>
      <audio controls className="w-full">
        <source src="/audios/yemeni_sanani_sample.mp3" type="audio/mp3" />
        المتصفح لا يدعم تشغيل الصوت.
      </audio>
    </div>
    <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto w-full">
      <h3 className="text-xl font-bold text-red-700 mb-2">مقطوعة من الغناء الصنعاني - بصوت تقليدي</h3>
      <audio controls className="w-full">
        <source src="/audios/yemeni_sanani_sample.mp3" type="audio/mp3" />
        المتصفح لا يدعم تشغيل الصوت.
      </audio>
    </div>
 
    </div>
  </div>
</section>


      {/* Dance Detail Modal */}
      {selectedDance && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedDance(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              title="button"
              onClick={() => setSelectedDance(null)}
              className="absolute top-4 left-4 z-10 bg-white/80 rounded-full p-1.5 text-gray-800 hover:bg-white hover:text-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={selectedDance.image || "/placeholder.svg"}
                  alt={selectedDance.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-red-600 mb-1">
                  <MapPin className="h-3.5 w-3.5 ml-1" />
                  <span>{selectedDance.region}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{selectedDance.title}</h2>
                <p className="text-gray-700 mb-6">{selectedDance.description}</p>
              </div>
            </div>

            {selectedDance.videoUrl && extractYouTubeId(selectedDance.videoUrl) && (
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">فيديو توضيحي</h3>
                <div className="w-full aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-64 rounded-lg"
                    src={`https://www.youtube.com/embed/${extractYouTubeId(selectedDance.videoUrl)}`}
                    title={selectedDance.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="p-6 flex justify-center">
              <button className="bg-red-600 hover:bg-red-700" onClick={() => setSelectedDance(null)}>
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Art Detail Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              title="button"
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 left-4 z-10 bg-white/80 rounded-full p-1.5 text-gray-800 hover:bg-white hover:text-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={selectedArt.image || "/placeholder.svg"}
                  alt={selectedArt.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-red-600 mb-1">
                  <MapPin className="h-3.5 w-3.5 ml-1" />
                  <span>{selectedArt.region}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">{selectedArt.title}</h2>
                <p className="text-gray-700 mb-6">{selectedArt.description}</p>

                {/* <Tabs defaultValue="materials" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="materials">المواد</TabsTrigger>
                    <TabsTrigger value="techniques">التقنيات</TabsTrigger>
                    <TabsTrigger value="significance">الأهمية</TabsTrigger>
                  </TabsList>
                  <TabsContent value="materials" className="mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">المواد المستخدمة:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedArt.details.materials.map((material, index) => (
                          <li key={index}>{material}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="techniques" className="mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">تقنيات الصناعة:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedArt.details.techniques.map((technique, index) => (
                          <li key={index}>{technique}</li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  <TabsContent value="significance" className="mt-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">الأهمية الثقافية:</h3>
                      <p>{selectedArt.details.significance}</p>
                    </div>
                  </TabsContent>
                </Tabs> */}
              </div>
            </div>

            <div className="p-6 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">صور إضافية</h3>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src={`${selectedArt.image.split(".")[0]}-1.jpg`}
                  alt={`${selectedArt.title} - صورة إضافية 1`}
                  className="w-full h-24 object-cover rounded-lg"
                  onError={(e) => (e.currentTarget.src = selectedArt.image)}
                />
                <img
                  src={`${selectedArt.image.split(".")[0]}-2.jpg`}
                  alt={`${selectedArt.title} - صورة إضافية 2`}
                  className="w-full h-24 object-cover rounded-lg"
                  onError={(e) => (e.currentTarget.src = selectedArt.image)}
                />
                <img
                  src={`${selectedArt.image.split(".")[0]}-3.jpg`}
                  alt={`${selectedArt.title} - صورة إضافية 3`}
                  className="w-full h-24 object-cover rounded-lg"
                  onError={(e) => (e.currentTarget.src = selectedArt.image)}
                />
              </div>
            </div>

            <div className="p-6 flex justify-center">
              <button className="bg-red-600 hover:bg-red-700" onClick={() => setSelectedArt(null)}>
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
