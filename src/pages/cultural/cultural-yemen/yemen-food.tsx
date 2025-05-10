import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface MealContent {
  title: string;
  ingredients: string[];
}

interface Meal {
  id: number;
  image: string;
  content: {
    ar: MealContent;
    en: MealContent;
    ru: MealContent;
  };
  city: 'Sanaa' | 'Aden';
}

const meals: Meal[] = [
  {
    id: 1,
    city: 'Sanaa',
    image: 'https://cdn.al-ain.com/images/2021/12/05/90-140302-yemeni-cuisine_700x400.jpeg',
    content: {
      ar: { title: 'المندي', ingredients: ['لحم أو دجاج', 'أرز بسمتي', 'بهارات مندي', 'بصل', 'فحم للتدخين'] },
      en: { title: 'Mandi', ingredients: ['Meat or Chicken', 'Basmati Rice', 'Mandi Spices', 'Onion', 'Charcoal for smoking'] },
      ru: { title: 'Манди', ingredients: ['Мясо или курица', 'Рис басмати', 'Специи мандии', 'Лук', 'Уголь для копчения'] },
    },
  },
  {
    id: 2,
    city: 'Aden',
    image: 'https://i.ytimg.com/vi/j_c74uaHeh0/maxresdefault.jpg',
    content: {
      ar: { title: 'الزربيان', ingredients: ['لحم', 'بطاطس', 'أرز بسمتي', 'لبن', 'بهارات زربيان'] },
      en: { title: 'Zurbian', ingredients: ['Meat', 'Potatoes', 'Basmati Rice', 'Yogurt', 'Zurbian Spices'] },
      ru: { title: 'Зурбиан', ingredients: ['Мясо', 'Картофель', 'Рис басмати', 'Йогурт', 'Специи зурбиан'] },
    },
  },
];

const YemenFood: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const lang = i18n.language as 'ar' | 'en' | 'ru';

  const cityDescriptions = {
    Sanaa: {
      ar: 'صنعاء تشتهر بأطباق تقليدية مميزة مثل المندي والسلتة التي تعتمد على النكهات الغنية والبهارات المحلية.',
      en: 'Sanaa is known for traditional dishes like Mandi and Saltah, rich in spices and local flavors.',
      ru: 'Сана славится традиционными блюдами, такими как Манди и Салта, с насыщенными специями и местным вкусом.'
    },
    Aden: {
      ar: 'عدن تقدم مأكولات بحرية وأطباق مثل الزربيان التي تعكس الطابع الساحلي للمدينة.',
      en: 'Aden offers seafood and dishes like Zurbian that reflect the city’s coastal nature.',
      ru: 'Аден предлагает блюда из морепродуктов и такие блюда, как Зурбиан, отражающие прибрежную природу города.'
    },
  };

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className={`text-3xl font-bold mb-8 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        {lang === 'ar' ? 'المأكولات اليمنية' : lang === 'ru' ? 'Йеменская кухня' : 'Yemeni Food'}
      </h1>

      {(['Sanaa', 'Aden'] as const).map((city) => (
        <div key={city} className="mb-12">
          <h2 className={`text-2xl font-semibold mb-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {lang === 'ar' ? (city === 'Sanaa' ? 'مأكولات صنعاء' : 'مأكولات عدن')
              : lang === 'ru' ? (city === 'Sanaa' ? 'Блюда Саны' : 'Блюда Адена')
                : city === 'Sanaa' ? 'Sanaa Foods' : 'Aden Foods'}
          </h2>
          <p className={`mb-6 text-gray-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {cityDescriptions[city][lang]}
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {meals.filter(meal => meal.city === city).map(meal => (
              <div
                key={meal.id}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedMeal(meal)}
              >
                <img src={meal.image} alt={meal.content[lang].title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className={`text-xl font-semibold ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{meal.content[lang].title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedMeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setSelectedMeal(null)}
              className={`absolute top-2 ${lang === 'ar' ? 'left-3' : 'right-3'} text-gray-500 text-xl font-bold hover:text-red-500`}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className={`text-2xl font-bold mb-4 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>{selectedMeal.content[lang].title}</h2>
            <ul className={`list-disc pl-6 space-y-1 text-gray-700 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {selectedMeal.content[lang].ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default YemenFood;
