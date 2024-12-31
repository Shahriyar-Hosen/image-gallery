export type TCategory = "photo" | "vector";
export interface IImage {
  id: string;
  name: string;
  url: string;
  category: TCategory;
  likes: number;
  shares: number;
}
