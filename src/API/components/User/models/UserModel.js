const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
    },
    /* pour que le mdp soit entre 8 et 258 caractères */
    password: {
        type: String,
        min: 8,
        max: 258,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    creationDate: {
        type: Date,
        default: new Date(),
    },
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer',
    }, 
})
module.exports = mongoose.model('User', UserSchema);