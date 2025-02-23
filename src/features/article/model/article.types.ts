export interface Article {
  category?: string;
  date: string;
  description: string;
  draft?: boolean;
  html?: string;
  id?: string;
  image?: string;
  index?: number;
  path?: string;
  tableOfContents?: string;
  title: string;
}

export interface ArticleNavigation {
  category: string;
  path: string;
  title: string;
}
