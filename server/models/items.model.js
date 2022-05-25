const mongoose = require('mongoose');
const Items = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Enter Product Name"]
    },
    qty: {
        type: Number,
        required: [true, "Enter Quantity"],
        min: [1,"Quantity Too Low"]
    },
    carbs : {type: Number},
    proteins : {type: Number},
    fats : {type: Number},
    measurement : {type:String}

    // createdBy: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Admin"
    // }
    
}, {timestamps: true});
 

module.exports = mongoose.model('Items', Items);