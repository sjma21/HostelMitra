const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    hotelName:{
        type : String,
        required : true,
    },
    hostelDescription : String,
    image : {
       url : String,
       filename : String
    },
    price : Number,
    location : String,
    country : String,
    contact: {
        phone: String,
        email: String
    },
   
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],
    owner:{
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    geometry : {
        type :{
            type: String,
            enum: ['Point'],
            required : true
        },
        coordinates:{
            type : [Number],
            required: true
        }
    },
    roomType: {
        type: String,
        enum: ["single", "shared"],
        required: true
    },
    hostelType: {
        type: String,
        enum: ['girls-only', 'boys-only', 'coed']
      },
      safetyFeatures: {
        type: [String], // Example: ["CCTV", "Fire Safety", "Security Guard"]
        default: [],
    },
    meals: {
        type: String, // Example: "Breakfast", "Breakfast and Dinner", "None"
        default: "None",
    },

});

listingSchema.post("findOneAndDelete" , async(listing)=>{
    if(listing){
    await Review.deleteMany({_id : {$in : listing.reviews}});
    }
}) 
const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;