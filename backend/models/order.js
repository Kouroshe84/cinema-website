const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderid:{
        type: mongoose.Schema.Types.ObjectId,
        default: function () {
            return this._id;
        },
        required: true,
    },
    userid: {
        //type: mongoose.Schema.Types.ObjectId,
        //ref: 'User', //connect to User collection
        type: String,
        required: true,
    },
    movieid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movies', //connect to movies collection
        //type: String,
        required: true,
    },
    seats: {
        type: [String],
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    showTime: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Order", orderSchema);