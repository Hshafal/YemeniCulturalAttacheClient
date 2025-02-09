import React from "react";
import { useParams, Link } from "react-router-dom";

const activitiesData: Record<string, { title: string; date: string; content: (string | { type: string; src?: string; alt?: string; href?: string; text?: string })[] }> = {
  "1": {
    title: "إنشاء بصمة الإصبع لموظفي الملحقية الثقافية اليمنية في موسكو",
    date: "موسكو 01.09.2024 —",
    content: [
      "نظمت الملحقية الثقافية اليمنية في موسكو، نشاطًا خاصًّا لتسجيل البصمات الحيوية لموظفيها...",
      {
        type: "image",
        src: "/activities/article1.jpg",
        alt: "موظفو الملحقية الثقافية اليمنية في موسكو",
      },
      "أقيم النشاط في مقر الملحقية الثقافية بموسكو، بحضور كافة الموظفين والإداريين...",
      {
        type: "link",
        href: "/book.pdf",
        text: "تحميل التقرير الكامل كملف PDF",
      },
    ],
  },
  "2": {
    title: "دورة تدريبية لموظفي الملحقية الثقافية اليمنية في موسكو حول استخدام \"جوجل فورم\"",
    date: "موسكو، 26.12.2024—",
    content: [
      "نظمت الملحقية الثقافية اليمنية في موسكو دورة تدريبية متخصصة لموظفيها...",
      {
        type: "image",
        src: "/activities/training1.jpeg",
        alt: "دورة تدريبية حول استخدام جوجل فورم",
      },
      {
        type: "link",
        href: "/training-details.pdf",
        text: "تحميل التقرير الكامل",
      },
    ],
  },
};

const ActivityPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = activitiesData[id || ""];

  if (!newsItem) {
    return <div>News not found</div>;
  }

  return (
    <article className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-right mb-4">{newsItem.title}</h1>
        <div className="space-y-4 text-right">
          <p className="font-semibold">{newsItem.date}</p>
          {newsItem.content.map((item, index: number) =>
            typeof item === "string" ? (
              <p key={index}>{item}</p>
            ) : item.type === "image" ? (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="mx-auto my-4"
              />
            ) : item.type === "link" ? (
              <a
                key={index}
                href={item.href}
                className="text-blue-600 hover:underline block mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            ) : null
          )}
          <Link to="/activities" className="block text-blue-600 hover:underline mt-4">
            العودة إلى صفحة الأنشطة
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ActivityPage;
