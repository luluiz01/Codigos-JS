const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Oo esranho ' }));

// module.exports = routes;
export default routes;
