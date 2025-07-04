
export interface IBorrowBook{
  _id: string;
  book: string;
  quantity: number;
  dueDate: string;
  BorrowedAt: string;
};

export interface BorrowSummary{
  bookTitle: string;
  isbn: string;
  totalQuantityBorrowed: number;
};

export interface BorrowFormData{
  quantity: number;
  dueDate: string;
};