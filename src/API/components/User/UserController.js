let users = require('./UserData');
const User = require('./models/UserModel');

exports.readAll = (req, res) => {
    return res.status(200).json(users);
};

exports.createOne = (req, res) => {
    

    const user = new User(req.body);
    user
        .save()
        .then(result => {
            return res.status(201).json(result);
        })
        .catch(err =>{
            res.status(400).json(err);
        })
}

exports.readOneById = (req, res) => {
    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        res.status(404).json({result: `id ${req.params.id} not found`});
    }

    res.status(200).json(user);
};

exports.updateOneById = (req, res) => {
    let user = users.find(user => user.id == req.params.id);

    if (!user) {
        res.status(404).json({result: `id ${req.params.id} not found`});
    }

    for (const key in req.body) {
        if(user.hasOwnProperty(key))
        user[key] = req.body[key];
        console.log(key);
    }
    res.status(200).json(user);
}

exports.findOneAndRemove(req, res) => {
    let user = users.find(user => user.id == req.params.id);

    if (!user) {
        res.status(404).json({result: `id ${req.params.id} not found`});
    }

    for (const key in req.body) {
        if(user.hasOwnProperty(key))
        user[key] = req.body[key];
        console.log(key);
    }
    res.status(200).json(user);
};