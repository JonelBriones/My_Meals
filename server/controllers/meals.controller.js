const Meal = require('../models/meals.model');
// const jwt = require("jsonwebtoken");
/* ------ CRUD FUNCTIONS ------*/

module.exports = {
    createMeal: (req,res) => {
        const newMealObject = new Meal(req.body);

        // const decodedJWT = jwt.decode(req.cookies.admintoken,{
        //     complete:true
        // })
        // newMealObject.createdBy = decodedJWT.payload.id
        // newMealObject.createdBy = req.jwtpayload.id;

        newMealObject.save()
            .then((createMeal)=> {
                res.json(createMeal)
                console.log(createMeal);
            })
            .catch((err)=>{
                res.status(400).json(err)
                console.log("Something went wrong in creating Meal");
            })
    },
    getMeal: (req,res) => {
        Meal.findOne({_id:req.params.id})
            .then((findOneMeal) => {
                res.json(findOneMeal)
                console.log(findOneMeal);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in finding Meal");
            })
    },
    updateMeal: (req,res) => {
        Meal.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
            .then((updateMeal) => {
                res.json(updateMeal)
                console.log(updateMeal);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in updating Meal");
            })
    },
    getAllMeals: (req,res) => {
        Meal.find()
            // .populate("createdBy","adminName")
                .then((AllMeals) => {
                    res.json(AllMeals)
                    console.log(AllMeals);
                })
                .catch((err)=> {
                    res.status(400).json(err)
                    console.log("Something went wrong in finding all Meals");
                })
    },
    deleteMeal: (req,res) => {
        Meal.deleteOne({_id:req.params.id})
            .then((deleteMeal) => {
                res.json(deleteMeal)
                console.log(deleteMeal);
            })
            .catch((err)=> {
                res.status(400).json(err)
                console.log("Something went wrong in deleting Meal");
            })
    },
    
    // Only that admin whos logged in have special actions
    findAllMealsByAdmin: (req,res) => {
        if(req.jwtpayload.adminName !== req.params.adminName){
            Admin.findOne({adminName:req.params.adminName})
                .then((adminNotLoggedIn)=>{
                    Meal.find({createdBy:adminNotLoggedIn._id})
                        .then((allMealsFromAdmin)=>{
                            console.log(allMealsFromAdmin);
                            res.json(allMealsFromAdmin);
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
            Meal.find({createdBy: req.jwtpayload.id})
                .then((allMealsFromAdmin)=>{
                    console.log(allMealsFromAdmin)
                    res.json(allMealsFromAdmin);
                })
                .catch((err)=>{
                    console.log(err);
                    res.status(400).json(err);
                })
        }
    }
}