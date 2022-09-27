const { createUser } = require('../controllers/orderController.controller');


module.exports = (router) => {
    router.get('/api/users/', createUser);

    return router;
};