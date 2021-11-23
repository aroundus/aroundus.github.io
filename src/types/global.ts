// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObeject = Record<string, any>;

export interface PostFrontmatter {
  id: string;
  path: string;
  category?: string;
  index: number;
  title: string;
  description?: string;
  image: string;
  date: string;
}
