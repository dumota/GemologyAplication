export interface IPostModel {
  user: string;
  title: string;
  content: string;
  description: string;
  thumbnail: string;
  category: string;
  likes?: string[];
  status: boolean;
  avaliation: boolean;
  _doc: object;
}
