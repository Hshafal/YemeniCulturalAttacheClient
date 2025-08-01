import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Music, Palette, MapPin } from "lucide-react"


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

const folkArts: ArtItem[] = [
  {
    id: "woodcarving",
    title: "النحت على الخشب",
    description:
      "يتميز اليمن بتقاليد غنية في النحت على الخشب، خاصة للأبواب والنوافذ والأثاث. تعكس التصاميم المعقدة والزخارف الهندسية والنباتية مهارة الحرفيين اليمنيين.",
    image: "/images/art-woodcarving.jpg",
    region: "صنعاء، تعز، حضرموت",
    details: {
      materials: ["خشب السدر", "خشب العرعر", "خشب الساج"],
      techniques: ["نحت بارز", "نحت غائر", "تطعيم بالعاج والصدف"],
      significance:
        "يعتبر النحت على الخشب من أهم الفنون الحرفية في اليمن، وتعكس الزخارف المستخدمة تأثيرات إسلامية وتقليدية محلية. تشتهر أبواب صنعاء القديمة بنقوشها الخشبية المعقدة التي تعتبر تحفاً فنية.",
    },
  },
  {
    id: "silverwork",
    title: "صناعة الفضة",
    description:
      "تعد صناعة الفضة من الحرف التقليدية المهمة في اليمن، وتشمل صناعة المجوهرات والجنابي والأدوات المنزلية. يتميز الصاغة اليمنيون بمهارتهم في تشكيل الفضة وزخرفتها بتصاميم معقدة.",
    image: "/images/art-silverwork.jpg",
    region: "صنعاء، صعدة، عمران",
    details: {
      materials: ["فضة", "مرجان", "عقيق", "أحجار كريمة"],
      techniques: ["طرق", "نقش", "تخريم", "تطعيم بالأحجار"],
      significance:
        "تعكس المشغولات الفضية اليمنية الهوية الثقافية والتراث الفني للبلاد. تعتبر المجوهرات الفضية جزءاً مهماً من الزي التقليدي للمرأة اليمنية، كما تعتبر الجنبية المزخرفة بالفضة رمزاً للهوية الرجالية.",
    },
  },
  {
    id: "textiles",
    title: "النسيج والتطريز",
    description:
      "يتمتع اليمن بتقاليد غنية في النسيج والتطريز، مع أنماط وتقنيات مميزة تختلف من منطقة لأخرى. تشتهر المنسوجات اليمنية بألوانها النابضة بالحياة وزخارفها المعقدة.",
    image: "/images/art-textiles.jpg",
    region: "جميع أنحاء اليمن",
    details: {
      materials: ["قطن", "صوف", "حرير", "خيوط ملونة"],
      techniques: ["نسج يدوي", "تطريز", "تطعيم بالخرز والعملات"],
      significance:
        "تعكس المنسوجات اليمنية التقليدية تاريخاً طويلاً من الإبداع والمهارة الحرفية. كانت اليمن تاريخياً مركزاً مهماً لتجارة المنسوجات، وتستمر هذه التقاليد في المناطق الريفية حتى اليوم.",
    },
  },
  {
    id: "pottery",
    title: "الفخار",
    description:
      "صناعة الفخار من الحرف التقليدية القديمة في اليمن، وتنتج مجموعة متنوعة من الأواني والأدوات المنزلية. يتميز الفخار اليمني بأشكاله الوظيفية وزخارفه البسيطة.",
    image: "/images/art-pottery.jpg",
    region: "حبابة، عدن، تعز",
    details: {
      materials: ["طين", "رمل", "أكاسيد معدنية للتلوين"],
      techniques: ["تشكيل يدوي", "تشكيل على الدولاب", "حرق في أفران تقليدية"],
      significance:
        "يعكس الفخار اليمني التقليدي الارتباط العميق بالأرض والموارد المحلية. تستخدم الأواني الفخارية في الحياة اليومية لتخزين الماء والطعام والطهي، وتعتبر جزءاً من التراث المادي للبلاد.",
    },
  },
]

const regionalTraditions = [
  {
    region: "المرتفعات الشمالية",
    description:
      "تتميز المرتفعات الشمالية، بما فيها صنعاء وصعدة، برقصة البرع الشهيرة والفنون الحرفية المتقنة مثل النحت على الخشب وصناعة الفضة. تعكس الفنون الشعبية في هذه المنطقة الطابع القبلي والتقاليد العريقة.",
    image: "/images/region-northern.jpg",
  },
  {
    region: "تهامة الساحلية",
    description:
      "تتميز منطقة تهامة الساحلية بفنون شعبية تعكس التأثيرات الأفريقية، مثل رقصة الليوا والمزمار. تتميز الموسيقى والرقص في هذه المنطقة بإيقاعاتها النابضة بالحياة والأدوات الموسيقية المميزة.",
    image: "/images/region-tihama-arts.jpg",
  },
  {
    region: "حضرموت",
    description:
      "تشتهر حضرموت بتقاليدها الموسيقية الفريدة، بما في ذلك الدان والحضرمي. كما تتميز بفن العمارة الطينية المميز والحرف اليدوية المتنوعة التي تعكس تاريخ المنطقة كمركز تجاري مهم.",
    image: "https://i.ytimg.com/vi/gfdiaxW-1gc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPCjdKao2rOZv5NbIg2rRvy2p4Og",
  },
  {
    region: "عدن والجنوب",
    description:
      "تتميز عدن والمناطق الجنوبية بمزيج فريد من التأثيرات الثقافية نتيجة موقعها كميناء تجاري تاريخي. تشمل الفنون الشعبية رقصات مميزة وموسيقى تعكس التبادل الثقافي مع الهند وشرق أفريقيا.",
    image: "/images/region-aden-arts.jpg",
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
            العودة إلى صفحة الثقافة
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            الحرف والفنون الشعبية 
          </h1>
          <div className="flex flex-wrap gap-4 text-white">
            <div className="flex items-center">
              <Music className="ml-2 h-5 w-5 text-red-400" />
              <span>فنون شعبية </span>
            </div>
            <div className="flex items-center">
              <Palette className="ml-2 h-5 w-5 text-red-400" />
              <span>حرف يدوية</span>
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
                  onClick={() => document.getElementById("folk-arts")?.scrollIntoView({ behavior: "smooth" })}
                >
                  الحرف اليدوية
                </button>
                <button
                  className="text-red-700 hover:text-red-900 hover:bg-red-200 rounded-md px-4 py-2"
                  onClick={() => document.getElementById("traditions")?.scrollIntoView({ behavior: "smooth" })}
                >
                التقاليد الإقليمية
                </button>
                <button
                  className="text-red-700 hover:text-red-900 hover:bg-red-200 rounded-md px-4 py-2"
                  onClick={() => document.getElementById("musical-instruments")?.scrollIntoView({ behavior: "smooth" })}
                >
                  الفنون الشعبية 
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Folk Arts Section */}
      <section id="folk-arts" className="py-16 bg-gradient-to-b from-red-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">الحرف اليدوية والفنون الشعبية</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {folkArts.map((art) => (
              <div
                key={art.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedArt(art)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img src={art.image || "/placeholder.svg"} alt={art.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-transparent"></div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center text-sm text-red-400 mb-1">
                      <MapPin className="h-3.5 w-3.5 ml-1" />
                      <span>{art.region}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{art.title}</h3>
                    <p className="text-white/80 mb-4">{art.description}</p>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedArt(art)
                      }}
                    >
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Traditions Section */}
      <section className="py-16 bg-white" id="traditions">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">التقاليد الإقليمية</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalTraditions.map((region, index) => (
              <div key={index} className="bg-red-50 rounded-xl overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img
                      src={region.image || "/placeholder.svg"}
                      alt={region.region}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-transparent"></div>
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold mb-3">{region.region}</h3>
                    <p className="text-gray-700">{region.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-blue-50" id="musical-instruments">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">الأهمية الثقافية للفنون الشعبية</h2>

            <div className="prose prose-lg max-w-none">
              <p>
                تلعب الفنون الشعبية والرقص دوراً محورياً في الحفاظ على التراث الثقافي اليمني ونقله عبر الأجيال. فهي ليست
                مجرد أشكال للترفيه، بل هي وسائل للتعبير عن القيم المجتمعية والهوية الجماعية والتاريخ المشترك.
              </p>

              <h3>التماسك الاجتماعي</h3>
              <p>
                تعزز الرقصات والفنون الشعبية الجماعية الشعور بالانتماء والتماسك الاجتماعي. فالمشاركة في هذه الأنشطة تقوي
                الروابط بين أفراد المجتمع وتعزز الهوية المشتركة.
              </p>

              <h3>نقل المعرفة والقيم</h3>
              <p>
                تعمل الفنون الشعبية كوسيلة لنقل المعرفة التقليدية والقيم الثقافية من جيل إلى آخر. فالقصص والرموز
                المتضمنة في الرقصات والحرف اليدوية تحمل دروساً ومعاني عميقة.
              </p>

              <h3>التنوع الثقافي</h3>
              <p>
                يعكس تنوع الفنون الشعبية اليمنية غنى النسيج الثقافي للبلاد. فكل منطقة لها تعبيراتها الفنية المميزة التي
                تعكس تاريخها وبيئتها وتفاعلاتها مع الثقافات الأخرى.
              </p>

              <h3>الاستمرارية والتجديد</h3>
              <p>
                رغم جذورها العميقة في التاريخ، تستمر الفنون الشعبية اليمنية في التطور والتكيف مع الظروف المتغيرة، مما
                يضمن استمراريتها وأهميتها للأجيال الجديدة.
              </p>
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
