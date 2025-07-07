import { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Scissors, Gem, Palette, MapPin } from "lucide-react"

interface ClothingItem {
  id: string
  title: string
  description: string
  image: string
  region: string
  details: {
    materials: string[]
    occasions: string[]
    history: string
  }
}

const menClothing: ClothingItem[] = [
  {
    id: "futa",
    title: "الفوطة",
    description: "قطعة قماش ملونة تلف حول الخصر وتعتبر من أهم قطع الملابس التقليدية للرجال في اليمن.",
    image: "/images/clothing-futa.jpg",
    region: "جميع أنحاء اليمن",
    details: {
      materials: ["قطن", "حرير", "ألياف صناعية"],
      occasions: ["يومية", "مناسبات", "أعياد"],
      history:
        "الفوطة هي قطعة قماش ملونة تلف حول الخصر وتعتبر من أهم قطع الملابس التقليدية للرجال في اليمن. تختلف أنماطها وألوانها حسب المنطقة، وتعكس الهوية الثقافية والاجتماعية لمرتديها.",
    },
  },
  {
    id: "jambiya",
    title: "الجنبية",
    description: "خنجر منحني يرتديه الرجال في وسط الجسم، وهو رمز للرجولة والشرف في المرتفعات الشمالية.",
    image: "/images/clothing-jambiya.jpg",
    region: "المرتفعات الشمالية",
    details: {
      materials: ["فضة", "فولاذ", "عاج", "قرن حيوان"],
      occasions: ["يومية", "مناسبات رسمية", "أعراس"],
      history:
        "الجنبية هي خنجر منحني يرتديه الرجال في وسط الجسم، وهي رمز للرجولة والشرف في المرتفعات الشمالية. تختلف أنواعها وقيمتها حسب المواد المستخدمة في صناعتها وزخرفتها.",
    },
  },
  {
    id: "imamah",
    title: "العمامة",
    description: "غطاء رأس تقليدي للرجال، تختلف طريقة لفها حسب المنطقة وتشير إلى الأصول الإقليمية.",
    image: "/images/clothing-imamah.jpg",
    region: "جميع أنحاء اليمن",
    details: {
      materials: ["قطن", "حرير", "شاش"],
      occasions: ["يومية", "مناسبات دينية", "احتفالات"],
      history:
        "العمامة هي غطاء رأس تقليدي للرجال، تختلف طريقة لفها حسب المنطقة وتشير إلى الأصول الإقليمية. تعتبر العمامة رمزاً للمكانة الاجتماعية والهوية الثقافية في المجتمع اليمني.",
    },
  },
  {
    id: "thobe",
    title: "الثوب",
    description: "رداء طويل يرتديه الرجال، خاصة في المرتفعات، ويلبس عادة فوق الفوطة.",
    image: "/images/clothing-thobe.jpg",
    region: "المرتفعات",
    details: {
      materials: ["قطن", "صوف", "ألياف طبيعية"],
      occasions: ["يومية", "مناسبات رسمية", "صلاة الجمعة"],
      history:
        "الثوب هو رداء طويل يرتديه الرجال، خاصة في المرتفعات، ويلبس عادة فوق الفوطة. يتميز بألوانه الفاتحة وبساطة تصميمه، ويعتبر من القطع الأساسية في الملابس اليمنية التقليدية.",
    },
  },
]

const womenClothing: ClothingItem[] = [
  {
    id: "sitara",
    title: "الستارة",
    description: "فستان طويل وفضفاض تلبسه النساء، غالباً ما يكون مزخرفاً بالتطريز والخرز والعملات المعدنية.",
    image: "/images/clothing-sitara.jpg",
    region: "المناطق الريفية",
    details: {
      materials: ["قطن", "حرير", "خيوط ذهبية وفضية"],
      occasions: ["مناسبات", "أعراس", "احتفالات"],
      history:
        "الستارة هي فستان طويل وفضفاض تلبسه النساء، غالباً ما يكون مزخرفاً بالتطريز والخرز والعملات المعدنية. تختلف ألوانها وزخارفها حسب المنطقة، وتعكس مهارة المرأة اليمنية في التطريز والحياكة.",
    },
  },
  {
    id: "balto",
    title: "البلطو",
    description: "رداء خارجي أسود فضفاض ترتديه النساء في المناطق الحضرية، خاصة في صنعاء.",
    image: "/images/clothing-balto.jpg",
    region: "المناطق الحضرية",
    details: {
      materials: ["قماش أسود", "حرير", "قطن"],
      occasions: ["خروج من المنزل", "زيارات", "تسوق"],
      history:
        "البلطو هو رداء خارجي أسود فضفاض ترتديه النساء في المناطق الحضرية، خاصة في صنعاء. يعتبر من الملابس التقليدية التي تعكس الحشمة والأناقة في آن واحد.",
    },
  },
  {
    id: "lithma",
    title: "اللثمة",
    description: "غطاء للوجه ترتديه النساء في المناطق الحضرية، خاصة في صنعاء.",
    image: "/images/clothing-lithma.jpg",
    region: "المناطق الحضرية",
    details: {
      materials: ["قماش خفيف", "شاش", "حرير"],
      occasions: ["خروج من المنزل", "مناسبات عامة"],
      history:
        "اللثمة هي غطاء للوجه ترتديه النساء في المناطق الحضرية، خاصة في صنعاء. تختلف طريقة ارتدائها حسب المنطقة والعادات المحلية، وتعتبر جزءاً من الزي التقليدي للمرأة اليمنية.",
    },
  },
  {
    id: "jewelry",
    title: "المجوهرات الفضية",
    description: "قطع فضية مزخرفة ترتديها النساء، خاصة في المناسبات والأعراس.",
    image: "/images/clothing-jewelry.jpg",
    region: "جميع أنحاء اليمن",
    details: {
      materials: ["فضة", "مرجان", "عقيق", "أحجار كريمة"],
      occasions: ["أعراس", "احتفالات", "مناسبات خاصة"],
      history:
        "المجوهرات الفضية هي قطع مزخرفة ترتديها النساء، خاصة في المناسبات والأعراس. تتميز بتصاميمها المعقدة وزخارفها الفريدة، وتعكس مهارة الصاغة اليمنيين وتراثهم العريق في صناعة المجوهرات.",
    },
  },
]

const regionalStyles = [
  {
    region: "صنعاء والمرتفعات",
    description:
      "تتميز ملابس المرتفعات بألوانها الداكنة والتطريز الغني. يرتدي الرجال الفوطة والثوب والجنبية، بينما ترتدي النساء البلطو الأسود واللثمة في المناطق الحضرية، والفساتين الملونة المطرزة في المناطق الريفية.",
    image: "/images/region-highlands.jpg",
  },
  {
    region: "تهامة الساحلية",
    description:
      "تتميز ملابس المناطق الساحلية بخفتها وألوانها الزاهية، مع تأثيرات أفريقية واضحة. يرتدي الرجال الفوطة ذات الألوان الزاهية، بينما ترتدي النساء فساتين ملونة مع أنماط هندسية.",
    image: "/images/region-tihama.jpg",
  },
  {
    region: "حضرموت",
    description:
      "تتأثر ملابس حضرموت بالتجارة مع الهند وإندونيسيا. يرتدي الرجال الثوب الأبيض أو الفاتح والعمامة المميزة، بينما ترتدي النساء ملابس داكنة مع تطريز فريد.",
    image: "/images/region-hadramaut.jpg",
  },
  {
    region: "المناطق الشرقية",
    description:
      "تتأثر ملابس المناطق الشرقية بالتقاليد البدوية، مع تكيفات للمناخ الصحراوي. تتميز بالبساطة والعملية، مع استخدام الألوان الترابية والأقمشة المتينة.",
    image: "/images/region-eastern.jpg",
  },
]

export default function ClothingPage() {
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null)
  const [activeTab, setActiveTab] = useState<'materials' | 'occasions' | 'history'>('materials')

  return (
    <div className="min-h-screen px-4 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{ backgroundImage: "url('https://qantara.de/sites/default/files/2024-02/02-traditionelle-mode-im-jemen-foto-dpa.jpg')" }}
        />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-20">
          <Link to="/cultural-yemen" className="inline-flex items-center text-white mb-6 transition">
            <ChevronRight className="ml-1 h-5 w-5" />
            العودة إلى صفحة الثقافة
          </Link>
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">الملابس اليمنية التقليدية</h1>
          <div className="flex gap-4 text-white flex-wrap">
            <div className="flex items-center">
              <Scissors className="ml-2 h-5 w-5 text-purple-300" />
              أنماط إقليمية
            </div>
            <div className="flex items-center">
              <Gem className="ml-2 h-5 w-5 text-purple-300" />
              مجوهرات
            </div>
            <div className="flex items-center">
              <Palette className="ml-2 h-5 w-5 text-purple-300" />
              ألوان زاهية
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">تراث الأزياء اليمنية</h2>
        <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
          تعكس الملابس التقليدية اليمنية التراث الثقافي الغني وتنوعها الإقليمي، وتختلف حسب المناطق والانتماءات.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { label: 'ملابس الرجال', id: 'men-clothing' },
            { label: 'ملابس النساء', id: 'women-clothing' },
            { label: 'الأنماط الإقليمية', id: 'regional-styles' },
          ].map(btn => (
            <button
              key={btn.id}
              className="px-4 py-2 bg-red-500 font-bold text-white hover:bg-red-700 rounded transition"
              onClick={() => document.getElementById(btn.id)?.scrollIntoView({ behavior: "smooth" })}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </section>

      {/* Men's Clothing */}
      <section id="men-clothing" className="py-16 bg-slate-50 px-4 border rounded-lg">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-12">ملابس الرجال التقليدية</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
          {menClothing.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition"
              onClick={() => {
                setSelectedItem(item)
                setActiveTab('materials')
              }}
            >
              <img src={item.image} className="w-full h-48 object-cover" alt={item.title} />
              <div className="p-4">
                <div className="text-red-400 text-sm flex items-center mb-1">
                  <MapPin className="h-4 w-4 ml-1" /> {item.region}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Women's Clothing */}
      <section id="women-clothing" className="py-16 bg-white px-4 border rounded-xl my-2">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-12">ملابس النساء التقليدية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
          {womenClothing.map(item => (
            <div
              key={item.id}
              className="bg-gradient-to-r from-purple-100 to-white rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer"
              onClick={() => {
                setSelectedItem(item)
                setActiveTab('materials')
              }}
            >
              <div className="md:flex">
                <img src={item.image} className="w-full md:w-1/2 h-48 object-cover" alt={item.title} />
                <div className="p-4 md:w-1/2">
                  <div className="text-red-400 text-sm flex items-center mb-1">
                    <MapPin className="h-4 w-4 ml-1" /> {item.region}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Styles */}
      <section id="regional-styles" className="py-16 bg-slate-50 border rounded-xl text-black px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-500">الأنماط الإقليمية للملابس</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto">
          {regionalStyles.map((region, index) => (
            <div key={index} className="bg-white/10 backdrop-blur rounded-xl overflow-hidden border border-white/20">
              <div className="md:flex">
                <img src={region.image} alt="image" className="w-full md:w-1/3 h-48 object-cover" />
                <div className="p-4 md:w-2/3">
                  <h3 className="text-xl font-bold mb-2">{region.region}</h3>
                  <p className=" text-sm">{region.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 left-4 text-gray-600 hover:text-red-400"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <img src={selectedItem.image} className="w-full h-full object-cover" alt={selectedItem.title} />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedItem.title}</h2>
                <p className="text-gray-700 mb-4">{selectedItem.description}</p>

                {/* Custom Tabs */}
                <div className="mb-4 flex gap-4">
                  {['materials', 'occasions', 'history'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as typeof activeTab)}
                      className={`px-4 py-2 rounded ${activeTab === tab
                          ? 'bg-red-400 text-white'
                          : 'bg-purple-100 text-red-500 hover:bg-purple-200'
                        }`}
                    >
                      {tab === 'materials' ? 'المواد' : tab === 'occasions' ? 'المناسبات' : 'التاريخ'}
                    </button>
                  ))}
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  {activeTab === 'materials' && (
                    <>
                      <h3 className="font-semibold mb-2">المواد:</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {selectedItem.details.materials.map((mat, i) => (
                          <li key={i}>{mat}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {activeTab === 'occasions' && (
                    <>
                      <h3 className="font-semibold mb-2">المناسبات:</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {selectedItem.details.occasions.map((o, i) => (
                          <li key={i}>{o}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {activeTab === 'history' && (
                    <>
                      <h3 className="font-semibold mb-2">التاريخ:</h3>
                      <p className="text-sm text-gray-700">{selectedItem.details.history}</p>
                    </>
                  )}
                </div>

                {/* Close button */}
                <div className="text-center mt-6">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="bg-red-400 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
