export interface IImage {
  id: string;
  name: string;
  url: string;
  category: "photo" | "vector";
  likes: number;
  shares: number;
}
