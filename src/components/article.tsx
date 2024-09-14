import React from "react";
import styles from "@/App.module.css";

type ArticleProps = {
  title: string;
  date: string;
  content: string;
  searchQuery: string;
};

export const Article: React.FC<ArticleProps> = React.memo(
  ({ title, date, content, searchQuery }) => {
    const highlightText = (text: string) => {
      if (!searchQuery) return text;
      const regex = new RegExp(`(${searchQuery})`, "gi");
      const parts = text.split(regex);

      return parts.map((part, index) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        ),
      );
    };

    return (
      <div className={styles.article}>
        <h2 className={styles.title}>{highlightText(title)}</h2>
        <p className={styles.date}>{date}</p>
        <p className={styles.content}>{highlightText(content)}</p>
      </div>
    );
  },
);
