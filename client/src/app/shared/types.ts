export interface Lecturer {
  id: number;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  start_date: string;
  image: string;
}

export interface Course {
  id: number;
  course_code: string;
  course_name: string;
  description: string;
  price: number;
  start_date: Date;
  number_of_classes: number;
  category: string;
  lecturer: number;
  first: string;
  last: string;
}

export type sortColumn = 'course_name' | 'price';

export interface courseSort {
  column: sortColumn;
  dirAsc: boolean;
}

export interface FilePath {
  name: string;
}
