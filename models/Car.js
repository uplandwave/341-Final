const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    model:{
        type: String,
        requires: true
    },
    year:{
        type: Number,
        requires: true
    },
    engine:{
        type: String,
        requires: true
    },
    horsepower:{
        type: Number,
        requires: true
    },
    top_speed:{
        type: String,
        requires: true
    },
    image:
    {
        data: Buffer,
        contentType: String
    }
})


module.exports = mongoose.model('Car', carSchema);