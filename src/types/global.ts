// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;

export interface Post {
  id: string;
  path: string;
  category?: string;
  index: number;
  title: string;
  description?: string;
  image: string;
  html?: string;
  date: string;
}
