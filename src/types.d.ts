export interface Post {
  title: string;
  content: string;
  published: boolean;
}

export interface Profile {
  bio: string;
}

export interface User {
  email: string;
  name: string;
  profile: Profile;
  posts: Post[];
}

export interface Data {
  users: User[];
}