export type ArticleType = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export type ArticleProps = {
  title: string;
  date: string;
  content: string;
  searchQuery: string;
};

export type ArticleListProps = {
  articles: ArticleType[];
  searchQuery: string;
};
