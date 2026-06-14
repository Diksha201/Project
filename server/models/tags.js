const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    description:{
        type: String,
        
    },
    service:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Service",
    },
    
});
module.exports = mongoose.model("tags", tagsSchema);