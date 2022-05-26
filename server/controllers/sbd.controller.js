const SBD = require('../models/sbd.model');
// const jwt = require("jsonwebtoken");
/* ------ CRUD FUNCTIONS ------*/

module.exports = {
    createSBD: (req,res) => {
        const newSBDObject = new SBD(req.body);
        newSBDObject.save()
            .then((createSBD)=> {
                res.json(createSBD)
                console.log(createSBD);
            })
            .catch((err)=>{
                res.status(400).json(err)
                console.log("Something went wrong in creating SBD");
            })
    },
    getSBD: (req,res) => {
        SBD.findOne({_id:req.params.id})
            .then((findOneSBD) => {
                res.json(findOneSBD)
                console.log(findOneSBD);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in finding SBD");
            })
    },
    updateSBD: (req,res) => {
        SBD.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateSBD) => {
                res.json(updateSBD)
                console.log(updateSBD);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in updating SBD");
            })
    },
    getAllSBDs: (req,res) => {
        SBD.find()
            // .populate("createdBy","adminName")
                .then((AllSBDs) => {
                    res.json(AllSBDs)
                    console.log(AllSBDs);
                })
                .catch((err)=> {
                    res.status(400).json(err)
                    console.log("Something went wrong in finding all SBDs");
                })
    },
    deleteSBD: (req,res) => {
        SBD.deleteOne({_id:req.params.id})
            .then((deleteSBD) => {
                res.json(deleteSBD)
                console.log(deleteSBD);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in deleting SBD");
            })
    },
}