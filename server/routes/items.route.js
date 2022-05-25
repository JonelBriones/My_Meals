const ItemController = require('../controllers/items.controller');
// const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {

                    /* ----- Admin Only ----- */
    app.post('/api/item', ItemController.createItem);
    app.get('/api/item/:id', ItemController.getItem);
    app.put('/api/item/:id',ItemController.updateItem)
    // app.get('/api/items/:adminName', ItemController.findAllItemsByAdmin);
    app.get('/api/items', ItemController.getAllItems);
    app.delete('/api/item/:id',ItemController.deleteItem)

                    /* ----- Users Only ----- */
    // app.post('/api/admin/Items/add', ItemController.createItem);
    // app.get('/api/admin/Items/show/:id', ItemController.getItem);
    // app.put('/api/admin/Items/:id',ItemController.updateItem)
    // app.delete('/api/admin/Items/:id',ItemController.deleteItem)

}