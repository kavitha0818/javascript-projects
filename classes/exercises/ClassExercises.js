// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }

    checkout(uses = 1) {
        this.timesCheckedOut += uses;
    }
}

class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    dispose(currentYear) {
        if (currentYear - this.copyright > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }

    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
        }
    }
}


// Define your Manual and Novel classes here:
class Novel {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
    this.title = pride and prejudice;
    this.author = Jane Austen;
    this.copyright = 1813;
    this.isbn = 1111111111111;
    this.pages = 432;
    this.timesCheckedOut = 32;
    this.discarded = No;
}

};

class Manual {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
    this.title = Top Secret Shuttle Building Manual ;
    this.author = Redacted;
    this.copyright = 2013;
    this.isbn = 0000000000000;
    this.pages = 1147;
    this.timesCheckedOut = 1;
    this.discarded = No;
}
};


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here: