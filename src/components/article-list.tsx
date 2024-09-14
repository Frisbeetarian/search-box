import { Article } from "@/components/article.tsx";
import { ArticleListProps } from "@/lib/types.ts";
import React from "react";
import styles from "@/App.module.css";

export const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  searchQuery,
}) => {
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {searchQuery && (
        <p className={styles.articlesCount}>
          {filteredArticles.length} articles found
        </p>
      )}
      {articles.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          content={article.content}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
};
