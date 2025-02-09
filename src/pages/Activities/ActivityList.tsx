import React from "react";
import Card from "./ActivityCard";

const activitiesData = [
  {
    id: "1",
    title: "إنشاء بصمة الإصبع لموظفي الملحقية الثقافية اليمنية في موسكو",
    imageSrc: "/activities/article1.jpg",
    imageAlt: "موظفو الملحقية الثقافية اليمنية في موسكو",
  },
  {
    id: "2",
    title: "دورة تدريبية لموظفي الملحقية الثقافية اليمنية في موسكو حول استخدام \"جوجل فورم\"",
    imageSrc: "/activities/training1.jpeg",
    imageAlt: "دورة تدريبية حول استخدام جوجل فورم",
  },
  // Add more news data as needed
];

const ActivityList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {activitiesData.map((newsItem) => (
        <Card
          key={newsItem.id}
          id={newsItem.id}
          title={newsItem.title}
          imageSrc={newsItem.imageSrc}
          imageAlt={newsItem.imageAlt}
        />
      ))}
    </div>
  );
};

export default ActivityList;
