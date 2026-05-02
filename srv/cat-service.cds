using bookshop as my from '../db/schema';

// @path: '/BookstoreService'
service BookstoreService {
    entity Books as projection on my.Books;
    entity Authors as projection on my.Authors;
}
