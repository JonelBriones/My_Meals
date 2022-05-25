const MealController = require('../controllers/meals.controller');
// const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {

                    /* ----- Admin Only ----- */
    app.post('/api/meal', MealController.createMeal);
    app.get('/api/meal/:id', MealController.getMeal);
    app.put('/api/meal/:id',MealController.updateMeal)
    // app.get('/api/meals/:adminName', MealController.findAllMealsByAdmin);
    app.get('/api/meals', MealController.getAllMeals);
    app.delete('/api/meal/:id',MealController.deleteMeal)

                    /* ----- Users Only ----- */
    // app.post('/api/admin/Meals/add', MealController.createMeal);
    // app.get('/api/admin/Meals/show/:id', MealController.getMeal);
    // app.put('/api/admin/Meals/:id',MealController.updateMeal)
    // app.delete('/api/admin/Meals/:id',MealController.deleteMeal)

}