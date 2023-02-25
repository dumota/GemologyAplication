export interface IPostDTO {
  _id?: string;
  user: string;
  title: string;
  content: string;
  description: string;
  thumbnail: string;
  category: string;
  likes?: string[];
}
