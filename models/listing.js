const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    image : {
        type : String,
        default : "https://pixabay.com/vectors/industrial-security-signal-symbol-1492046/" ,
        set : (v) => v === "" ? "https://pixabay.com/vectors/industrial-security-signal-symbol-1492046/" : v
    },
    price : Number,
    location : String,
    country : String,
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref : "Review"
        }
    ]
});

listingSchema.post("findOneAndDelete", async function (doc) {
    if (doc) {
        await Review.deleteMany({ _id: { $in: doc.reviews } });
    }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;