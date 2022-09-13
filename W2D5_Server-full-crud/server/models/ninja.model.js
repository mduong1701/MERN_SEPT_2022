// import mongoose to build the model
const mongoose = require("mongoose");

// the schema - the rules that the entries in the DB must follow
const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a {PATH}"],
        minlength: [3, "{PATH} must have at least 3 chars, but you gave it {VALUE}"]
    },
    numberOfBelts: {
        type: Number,
        required: [true, "must give a belt"]
    },
    isGraduating: {
        type: Boolean,
        default: false
    }
}, {timestamps:true})

// the model - this is what we use to make the actual queries to the DB
const Ninja = mongoose.model("Ninja", NinjaSchema)
// console.log(Ninja);

// export the model
module.exports = Ninja;