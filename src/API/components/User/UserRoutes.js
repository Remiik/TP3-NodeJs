const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

router.route('/users')

    .get([
        UserController.readAll
    ])

    .post([
        UserController.createOne
    ])

    module.exports = router;

    router.route('/users/:id')

        .get([
            UserController.readOneById
        ])

        .patch([
            UserController.updateOneById
        ])
    module.exports = router;