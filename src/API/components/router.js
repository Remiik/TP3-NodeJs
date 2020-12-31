const config = require('../../config/env.config');

const UtilsRoutes = require('./Utils/UtilsRoutes');
const UserRoutes = require('./User/UserRoutes');

const router = (app) => {
    app.use(config.root_api, UtilsRoutes);
    app.use(config.root_api, UserRoutes);

    app.use((req, res) => {
        res.status(404).json({error: 'Not found'});
    });
};

module.exports = router;