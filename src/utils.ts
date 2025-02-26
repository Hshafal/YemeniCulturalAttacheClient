export function getDataByLastDays(data: any, days: number) {
  const now = new Date();
  const lastDays = new Date(now.getTime() - days * 24 * 60 * 60 * 1000);

  return data.filter((item: any) => {
    const createdAt = new Date(item.createdAt);
    return createdAt >= lastDays && createdAt <= now;
  });
}

export function shortenString(longString: string) {
  if (longString.length <= 100) {
    return longString;
  } else {
    return longString.substring(0, 100) + "...";
  }
}

export function sortByDate(newsArticles: News[]): News[] {
  return newsArticles.sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date(0); // Default to epoch if date is undefined
    const dateB = b.date ? new Date(b.date) : new Date(0); // Default to epoch if date is undefined
    return dateB.getTime() - dateA.getTime();
  });
}

export function formatDate(isoDate: string | undefined): string {
  if (!isoDate) return "";

  const date = new Date(isoDate);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  return date.toLocaleDateString("ru-RU", options);
}

export function getImageURL(url: string | undefined) {
  return url ? `${UPLOAD_URL}/${url}` : "/news/news3.jpg";
}

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { News } from "./types";
import { UPLOAD_URL } from "./api/myAxios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
