const SBDController = require('../controllers/sbd.controller');

module.exports = (app) => {
    app.post('/api/sbd', SBDController.createSBD);
    app.get('/api/sbd/:id', SBDController.getSBD);
    app.get('/api/sbds', SBDController.getAllSBDs);
    app.put('/api/sbd/:id',SBDController.updateSBD)
    app.delete('/api/sbd/:id',SBDController.deleteSBD)

}