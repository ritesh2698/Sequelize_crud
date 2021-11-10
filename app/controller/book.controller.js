const db = require('../config/db.config')
const Book = db.book

//post book
exports.create = (req,res)=>{
    Book.create ({
        name:req.body.name,
        price:req.body.price,
        language:req.body.language,
        total_page:req.body.total_page
    }).then((then)=>{
        res.status(200).json({
            status:true,
            message:"Book Creates Succesfully"
        })
    })    
}

//get all book
exports.findAll = (req,res)=>{
    Book.findAll().then((books)=>{
        res.status(200).json({
            status:true,
            data:books
        })
    })
}   

//find by id 
exports.findByPk = (req,res)=>{
    Book.findByPk(req.params.bookID).then((book)=>{
        res.status(200).json({
            status:true,
            data:book
        })
    })
}

//update
exports.update = (req,res)=>{
    const id = req.params.bookID
    Book.update(
        {
            name:req.body.name,
            price:req.body.price,
            language:req.body.language,
            total_page:req.body.language
        },
        {
            where:{id: req.params.bookID}
        }
    ).then((book)=>{
        res.status(200).json({
            status:true,
            message:"Book update successfully with id = "+ id
        })
    })
}

//delete by id
exports.delete = (req,res)=>{
    const id = req.params.bookID
    Book.destroy({
        where:{id:id}
    }).then(()=>{
        res.status(200).json({
            status:true,
            message:"Book delete successfully with id ="+id
        })
    })
}

