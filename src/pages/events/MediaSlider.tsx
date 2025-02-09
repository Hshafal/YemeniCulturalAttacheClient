import React from 'react';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

interface MediaSliderProps {
  media: MediaItem[];
  title: string;
  description: string;
  date: string;
}

const MediaSlider: React.FC<MediaSliderProps> = ({ media, title, description, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
      <div>
        {media.map((item, index) => (
          <div key={index}>
            {item.type === 'image' ? (
              <img src={item.url} alt={item.alt} />
            ) : (
              <iframe
                width="560"
                height="315"
                src={item.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSlider;
