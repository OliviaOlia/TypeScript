import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    //markDamaged?: (reason: string) => void; //as property
    //markDamaged?(reason: string): void; //as method
    markDamaged?: DamagedLogger;
}

interface DamagedLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person{
  numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
     duration?: number;
     speed?: number;
}

interface Magazine {
     title: string;
     publisher: string;
}


interface ShelfItem {
    title: string;
}


interface LibMgrCallback {
    (err: Error | null, titles: string[] | null ): void;
}


interface Callback<T> {
    (err: Error | null, data: T[] | null ): void;
}

export {Book, TOptions, Librarian, Author, Person, ShelfItem, LibMgrCallback, Callback, Magazine, DamagedLogger as Logger};