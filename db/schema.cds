namespace bookshop;

entity Books {
    key ID     : Integer;
        author : Association to Authors;
        title  : String;
        stock  : Integer;
        price  : Decimal(9, 2);
}

entity Authors {
    key ID    : Integer;
        name  : String;
        books : Association to many Books
                    on books.author = $self;

}
