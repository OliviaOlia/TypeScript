import * as Interfaces from './../interfaces';
import { format, logger, logParameter, sealed, writeble } from './decorators';
//import { Librarian } from './interfaces';



//@sealed('UniversityLibrarian')
@logger
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;



    assistCustomer (@logParameter custName: string, @logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    @writeble(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writeble(false)
    teachComunity(): void {
        console.log('Teaching Community');
    }
}

export {UniversityLibrarian};