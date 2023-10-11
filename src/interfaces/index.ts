export interface IMovie {
  _id: string;
  videoId: string;
  title: string;
  description: string;
  url: string;
  sharedBy: string;
  like: number;
  dislike: number;
}

export interface ILoginArgs {
  email: string;
  password: string;
}

export interface IRegisterArgs {
  email: string;
  password: string;
  fullName: string;
}
