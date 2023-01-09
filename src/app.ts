/* eslint-disable no-redeclare */

import { ReferenceItem, UL, RefBook, Shelf } from "./classes";
import { Book, Librarian, Logger, Magazine } from "./interfaces";
//import Refbook from './classes/encyclopedia';
import { getAllBooks, printRefBook, purge, getObjectProperty, createCustomer, getBookByCatagory, logCategorySearch, getBooksByCategoryPromise, logSearchResults } from "./functions";
import { Library } from "./classes/library";
import { Category } from "./enums";
import { BookRequiredFields, CreateCustomerFunctionType, UpdateBook } from "./types";


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


//=================================================================================




/*const author: Author = {
    name: "Alya",
    email: 'someemail@gmail.com',
    numBooksPublished: 2
}*/





//========================================================
// Task 02.01
//logFirstAvailable(getAllBooks());
//logBookTitles(getBookTitleByCategory(Category.JavaScript));
//console.log(getBookAuthorByIndex(0));
//console.log(calcTotalPages());

//========================================================
// Task 03.01
//const myID: string = createCustomerID('Ann', 10);
//console.log(myID);
//let idGenerator : (name: string, id: number) => string; //функц тип
// let idGenerator : typeof createCustomerID;
//idGenerator = (name: string, id: number) => `${id}/${name}`; //функція
//idGenerator = createCustomerID;
//console.log(idGenerator('Bob', 20));

//==========================================================
//Task 03.02
//createCustomer('Liv');
//createCustomer('Liv', 20);
//createCustomer('Liv', 20, 'Kyiv');
//console.log(getBookTitleByCategory());
//console.log(logFirstAvailable());
//console.log(getBookById(1));

//console.log(checkoutBooks('Noname customer', 1, 2, 4));
//console.log(checkoutBooks('Noname customer', ...[1, 2, 4]));


//===================================================
// Task 03.03
//console.log(getTitles(3, true));
//console.log(getTitles(true));
//console.log(getTitles(false));
//console.log(getTitles(2, false));

//=================================================
// Task 03.04
//console.log(bookTitleTransform('Learn TypeScript'));
//console.log(bookTitleTransform(123));

//=====================================================
// Task 04.01
/* const myBook: Book = {
   id: 5,
   title: 'Colors, Backgrounds, and Gradients',
   author: 'Eric A. Meyer',
   available: true,
   category: Category.CSS,
   //year: 2015,
   //copies: 3
   pages: 200,
   //markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
   markDamaged(reason: string) {
    console.log(`Damaged: ${reason}`);
   }
};
//printBook(myBook);
myBook.markDamaged('missing back cover'); */

//========================================================
// Task 04.02
/*const logDamaged: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
logDamaged('missing back cover'); */

// ======================================================================
// Task 04.03
/* const favoriteAuthor: Author = {
    name: 'Alya',
    email: 'email@gmail.com',
    numBooksPublished: 2
};

const favoriteLibrarian: Librarian = {
    name: 'Liv',
    email: 'some@gmail.com',
    department: 'Something',
    assistCustomer: null
}; */

// ============================================================
// Task 04.04
/* const offer: any = {
    book: {
        title: "someTitle",
    },
};

console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]); // for array
console.log(offer.book.authors?.[10]?.name); */
//==================================
// Task 04.05
//console.log(getProperty(myBook, 'title'));
//console.log(getProperty(myBook, 'markDamaged'));
//=========================================================
// Task 05.01
/* const ref = new ReferenceItem(1, 'Learn TS', 2022);
console.log(ref);
ref.printItem();
ref.printItem();
ref.publisher = 'abc';
console.log(ref.publisher);
console.log(ref.getID()); */
//======================================================
// Task 05.02
//const refBook: Refbook = new Refbook(1, 'Learn TS', 2022, 2);
//refBook.printItem();
//console.log(refBook);
//======================================================
// Task 05.03
/* const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TS', 2022, 2);
//refBook.printItem();
console.log(refBook);
refBook.printCitation(); */
//======================================================
// Task 05.04
/*const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Liv';
favoriteLibrarian.assistCustomer('Boris', 'Learn TS');
*/
// Task 05.05
/* const personBook: PersonBook = {
      name: 'Anna',
      author: 'Anna',
      available: false,
      category: Category.Angular,
      email: 'smt@example.com',
      id: 1,
      title: 'Sth'
 }; */

//const options: TOptions = {duration: 20};
//const options2 = setDefaultConfig(options);
//==============================================
//  Task 06.03, 04
//const refBook: RefBook = new RefBook(1,'Learn TypeScript', 2022, 2);
//printRefBook(refBook);

//const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
//printRefBook(favoriteLibrarian);

//=========================================
// Task 06.05
//const flag = false;

/*if(flag) {
    import('./classes')
         .then(o => {
            const reader = new o.Reader();
            reader.name = "Olia";
            reader.take(getAllBooks()[0]);
         })
          .catch(err => console.log(err));
} */

/*if(flag) {
    const o = await import('./classes');
         /*.then(o => {
            const reader = new o.Reader();
            reader.name = "Olia";
            reader.take(getAllBooks()[0]);
         })
          .catch(err => console.log(err));
} */
////============================================
// Task 06.06
//let library: Library = new Library();
/*let library: Library = {
    id: 0,
    name: "",
    addressed: ""
}; */

//================================================
//Task 07.01
const inventory: Book[] =
    [
        { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
        { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
        { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
        { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
        ];
/*const result1 = purge(inventory);

const result2 = purge([1,2,3]); */
//====================================================
// Task 07.02
/*const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);
const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
   ];

   const magazineShelf = new Shelf<Magazine>();
   magazines.forEach(mag => magazineShelf.add(mag));
   console.log(magazineShelf.getFirst().title);

//===========================================================
//Task 07.03
magazineShelf.printTitles();
magazineShelf.find('Five Points');

getObjectProperty(magazines[0], 'title');
//==========================================================
//Task 07.04

const bookRequiredFields: BookRequiredFields = {
      author: 'Anna',
      available: false,
      category: Category.Angular,
      id: 1,
      markDamaged: null,
      pages: 200,
      title: 'Learn Angular'

};

const updatedBook: UpdateBook = {
    id: 1,
    pages: 200
};

let params: Parameters<CreateCustomerFunctionType>;
params = ['anna', 30, 'Kyiv'];
createCustomer(...params);
*/
//=============================================================
// Task 08.01, 02
const favoriteLibrarian = new UL.UniversityLibrarian();
//favoriteLibrarian['a'] = 1; //але тут зміни робити можна
//UL.UniversityLibrarian['a'] = 2; //object seal не дозволяє змінювати щось в самому класі чи прототипі
//console.log(favoriteLibrarian);
//декоратором ми додали новий метод, але викликати його тут не можемо.(через крапку) бо статичтна типізація, а сам метод уже з'являється при рантаймі програми
//але можна виклаикати так:
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian['printLibrarian']();

//======================================================
// Task 08.03
console.log(favoriteLibrarian);
//favoriteLibrarian.assistFaculty = null;
//favoriteLibrarian.teachComunity = null;
// Task 08.04
//const refBook: RefBook = new RefBook(1,'Learn TypeScript', 2022, 2);
//refBook.printItem();

//=========================================================
// Task 08.05
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
//=======================================================
//Task 08.06
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// Task 08.07
//const refBook: RefBook = new RefBook(1,'Learn TypeScript', 2022, 2);
//refBook.copies = 10;
//console.log(refBook.copies);
//=========================================================
// Task 09.01
/*console.log('Begin');
getBookByCatagory(Category.JavaScript, logCategorySearch);
getBookByCatagory(Category.Software, logCategorySearch);
console.log('End');
//==========================================================
// Task 09.02
getBooksByCategoryPromise(Category.JavaScript)
        .then(titles => {
            console.log(titles);
            return Promise.resolve(titles.length);
        })
        .then(n => console.log(n))
        .catch(reason => console.log(reason));
getBooksByCategoryPromise(Category.Software)
        .then(titles => console.log(titles))
        .catch(reason => console.log(reason)); */

//Task 09.03
/*console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software);
console.log('End'); */