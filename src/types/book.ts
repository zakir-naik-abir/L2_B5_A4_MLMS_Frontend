
export interface IBook{
  _id: string;
  title: string;
  author: string;
  genre: "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export type BFilter = "ALL" |  "FICTION"
  | "NON_FICTION"
  | "SCIENCE"
  | "HISTORY"
  | "BIOGRAPHY"
  | "FANTASY";


export type BookFormValues = Omit<IBook, '_id' | 'createdAt' | 'updatedAt' | 'available' >;