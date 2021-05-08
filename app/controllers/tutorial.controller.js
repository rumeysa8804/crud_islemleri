const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create=(req,res) =>{
    Tutorial.create({
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "age":req.body.age
    })
    .then(tutorials=>{
        res.json(tutorials);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "error",details:err})
    });
};

// Find a single Tutorial with an id
exports.findAll =(req,res) => {
    Tutorial.findAll()
    .then(tutorials => {
        res.json(tutorials.sort(function(c1,c2){return c1.id - c2.id}))
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "error",details:err})
    });
};

// Update a Tutorial by the id in the request
exports.update = (req,res) => {
    const id= req.params.id;
    Tutorial.update(req.body,
        {where: {id : id}})
    .then(()=>{
        res.status(200).json({msg: "updated successfuly -> tutorials id = "+id});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "error",details:err})
    });
};


// Delete a Tutorial with the specified id in the request
exports.delete = (req,res) => {
    const id=req.params.id;
    Tutorial.destroy( {where: {id : id}})
    .then(()=>{
        res.status(200).json({msg: "deleted successfuly -> tutorials id = "+id});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({msg: "error",details:err})
    });
}
