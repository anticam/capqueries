const cds = require('@sap/cds')

module.exports = class BookstoreService extends cds.ApplicationService {
  init() {

    const { Books, Authors } = cds.entities('BookstoreService')

    this.on('READ', Books, async (req) => {
      console.log('READ Books', req.data);

      // *** Examples for SELECT queries ***
      const query0 = SELECT.from(Books);
      const query1 = await SELECT.from(Books); // select all books with all columns
      const query2 = await SELECT.from(Books).columns('title', 'author.name', 'stock');
      const query3 = await SELECT.one.from(Books); // select first record with all columns
      const query4 = await SELECT.one.from(Books).where({ stock: 45 }); // select first record with all columns
      const query5 = await SELECT.from(Books).where({ stock: 45 }); // select first record with all 
      const query6 = await SELECT.from(Books).where({ stock: { '<': 50 } })
      const query7 = await SELECT.from(Books).where({ stock: { '<': 50 } }).and({ price: { '<': 100 } }); // select first 
      const query8 = await SELECT.from(Books).columns('author_ID');

      const query9 = await SELECT.distinct.from(Books).columns('author_ID');
      const query10 = await SELECT.from(Books).orderBy('price');
      const query11 = await SELECT.from(Books).orderBy('price desc');
      const query12 = await SELECT.from(Books).limit(2);
      const query13 = await SELECT.from(Books).columns('author_ID', 'author.name', 'count(ID) as bookCount').groupBy('author_ID');

      console.log('Query0', query0);

      return query1;

    })

    this.before(['CREATE', 'UPDATE'], Books, async (req) => {
      console.log('Before CREATE/UPDATE Books', req.data)
    })
    this.after('READ', Books, async (books, req) => {
      console.log('After READ Books', books)
    })
    this.before(['CREATE', 'UPDATE'], Authors, async (req) => {
      console.log('Before CREATE/UPDATE Authors', req.data)
    })
    this.after('READ', Authors, async (authors, req) => {
      console.log('After READ Authors', authors)
    })


    return super.init()
  }
}
