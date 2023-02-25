export interface IPostDTO {
  user: string;
  title: string;
  content: string;
  description: string;
  thumbnail: string;
  category: string;
  likes?: string[];
}
