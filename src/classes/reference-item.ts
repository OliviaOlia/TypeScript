
//import { Librarian } from './interfaces';

import { timeout } from "./decorators";


abstract class ReferenceItem {
    /* title: string;
    year: number;

    constructor(newTitle: string, newYear: number) {
        console.log('Creating a new ReferenceItem...');
        this.title = newTitle;
        this.year = newYear;
    } */
    #id: number;

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    static department: string = 'Research Dep.';

    constructor( //те саме що вище  comment
        id: number,
        public title: string,
        protected year: number) {
            console.log('Creating a new ReferenceItem...');
            this.#id = id;
    }
    @timeout(2000)
    printItem(): void {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
        console.log(Object.getPrototypeOf(this).constructor.department); //те саме що вище тільки без явного вказування об'єкту (класу)
    }
    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}



export {ReferenceItem};