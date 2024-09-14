import { Article } from "@/components/article.tsx";
import { ArticleListProps } from "@/lib/types.ts";
import React from "react";

export const ArticleList: React.FC<ArticleListProps> = ({
  articles,
  searchQuery,
}) => {
  return (
    <div>
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
