module.exports = (app)=>{
    const book = require('../controller/book.controller')

    //create
    app.post('/api/book',book.create);

    //retrive 
    app.get('/api/books',book.findAll)

    //retrive by id
    app.get('/api/books/:bookID',book.findByPk)

    //update
    app.put('/api/books/:bookID',book.update)

    //delete by id
    app.delete('/api/books/:bookID',book.delete)
    
}