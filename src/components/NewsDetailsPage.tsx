import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import myAxios, { UPLOAD_URL } from "../api/myAxios";
import { Helmet } from "react-helmet";

const CategoryPage: React.FC = () => {
  const { id } = useParams();

  const {
    data: news,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["news", id],
    queryFn: async () => {
      const res = await myAxios.get(`/news/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Server Error :(</h1>;

  const { title, description, thumbnail, images, isImportant, category, date } = news;

  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="flex max-w-4xl flex-col items-center p-4 bg-gray-100 text-right"
        dir="rtl"
      >
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <img
          src={thumbnail ? `${UPLOAD_URL}/${thumbnail}` : "/news/news3.jpg"}
          alt={title}
          className="rounded-lg mb-6 w-full h-80 object-cover shadow-md"
        />
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <span className="text-gray-500 text-sm mt-2">
          {new Date(date).toLocaleDateString("ru-RU")}
        </span>
        <div
          className="border p-4 rounded-lg shadow-md"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {images && images.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-4">
            {images.map((image: string, index: number) => (
              <img
                key={image}
                src={`${UPLOAD_URL}/${image}`}
                alt={`${title}-${index}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        )}

        <div className="flex flex-col items-end">
          <span
            className={`px-2 py-1 rounded ${isImportant ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
          >
            {isImportant ? "مهم" : category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
