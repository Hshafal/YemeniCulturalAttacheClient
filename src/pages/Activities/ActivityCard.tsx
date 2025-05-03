import { Link } from "react-router-dom";

export interface CardProps {
  id: string;
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}

const ActivityCard: React.FC<CardProps> = ({ id, title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-md transition overflow-hidden">
      {/* Image not clickable */}
      <img src={imageSrc} alt={imageAlt} className="w-full h-48 object-cover" />

      {/* Title and Description are clickable */}
      <div className="p-4">
        <Link to={`/activities/${id}`}>
          <h3 className="text-lg font-semibold text-gray-900 hover:text-red-600">{title}</h3>
        </Link>

        {description && (
          <Link to={`/activities/${id}`}>
            <p className="text-sm text-gray-600 mt-1 line-clamp-3">{description}</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
