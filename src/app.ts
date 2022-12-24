/* eslint-disable no-redeclare */

import { ReferenceItem } from "./classes";
import { Logger } from "./interfaces";


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



class Encyclopedia extends ReferenceItem {
    constructor(
        id: number,
        title: string,
        year: number,
        public edition: number
    ) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`)
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`)
    }
}


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
/* const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TS', 2022, 2);
refBook.printItem();
console.log(refBook); */
//======================================================
// Task 05.03
/* const refBook: Encyclopedia = new Encyclopedia(1, 'Learn TS', 2022, 2);
//refBook.printItem();
console.log(refBook);
refBook.printCitation(); */
//======================================================
// Task 05.04
/*const favoriteLibrarian: Librarian = new UniversityLibrarian();
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
