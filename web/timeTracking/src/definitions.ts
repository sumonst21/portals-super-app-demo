export interface SessionObj {
  user: User;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
  userType: string;
  avatarUrl: string;
}

export interface Entry {
  id: number;
  companyId: number;
  length: number;
  date: string;
  status: string;
}

export interface Event {
  id: string;
  username: string;
  src: string;
  rel: string;
  text: string;
}
