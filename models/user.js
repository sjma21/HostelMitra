const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


// Define the user schema
const userSchema = new Schema({
    googleId: { type: String },
    username: {
        type: String,
       
        minlength: 3,
        maxlength: 30,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v); // Simple regex for email validation
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    firstName: {
        type: String,
        // required: true,
        maxlength: 50,
        trim: true,
    },
    lastName: {
        type: String,
        // required: true,
        maxlength: 50,
        trim: true,
    },
    phoneNumber: {
        type: String,
        // required: true,
        validate: {
            validator: function(v) {
                return /^\+?[1-9]\d{1,14}$/.test(v); // Simple regex for phone number validation
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Define user roles
        default: 'user'
    },
    listings: [{ type: Schema.Types.ObjectId, ref: 'Listing' }]

});
userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);


// Export the user model

