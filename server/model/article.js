
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


let articleSchema = new Schema({
    title : {type:String,required:true}
    ,tags : {type:String}
    ,content : {type:String,required: true}
    ,date : {type:Date,default:Date.now()}
    ,author : {type:Schema.Types.ObjectId,ref:"user"}
    ,readNum:{type:Number}
    ,commentsNum:{type:Number}
    ,articleurl:{type:String}
});

module.exports = mongoose.model("article",articleSchema);