const Item = require('../models/items.model');
// const jwt = require("jsonwebtoken");
/* ------ CRUD FUNCTIONS ------*/

module.exports = {
    createItem: (req,res) => {
        const newItemObject = new Item(req.body);
        // const decodedJWT = jwt.decode(req.cookies.admintoken,{
        //     complete:true
        // })
        // newItemObject.createdBy = decodedJWT.payload.id
        // newItemObject.createdBy = req.jwtpayload.id;

        newItemObject.save()
            .then((createItem)=> {
                res.json(createItem)
                console.log(createItem);
            })
            .catch((err)=>{
                res.status(400).json(err)
                console.log("Something went wrong in creating Item");
            })
    },
    getItem: (req,res) => {
        Item.findOne({_id:req.params.id})
            .then((findOneItem) => {
                res.json(findOneItem)
                console.log(findOneItem);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in finding Item");
            })
    },
    updateItem: (req,res) => {
        Item.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateItem) => {
                res.json(updateItem)
                console.log(updateItem);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in updating Item");
            })
    },
    getAllItems: (req,res) => {
        Item.find()
            // .populate("createdBy","adminName")
                .then((AllItems) => {
                    res.json(AllItems)
                    console.log(AllItems);
                })
                .catch((err)=> {
                    res.status(400).json(err)
                    console.log("Something went wrong in finding all Items");
                })
    },
    deleteItem: (req,res) => {
        Item.deleteOne({_id:req.params.id})
            .then((deleteItem) => {
                res.json(deleteItem)
                console.log(deleteItem);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in deleting Item");
            })
    },
    
    // Only that admin whos logged in have special actions
    findAllItemsByAdmin: (req,res) => {
        if(req.jwtpayload.adminName !== req.params.adminName){
            Admin.findOne({adminName:req.params.adminName})
                .then((adminNotLoggedIn)=>{
                    Item.find({createdBy:adminNotLoggedIn._id})
                        .then((allItemsFromAdmin)=>{
                            console.log(allItemsFromAdmin);
                            res.json(allItemsFromAdmin);
                        })
                        .catch((err)=> {
                            console.log(err);
                            res.status(400).json(err);
                        })
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        }
        else {
            Item.find({createdBy: req.jwtpayload.id})
                .then((allItemsFromAdmin)=>{
                    console.log(allItemsFromAdmin)
                    res.json(allItemsFromAdmin);
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        }
    }
}