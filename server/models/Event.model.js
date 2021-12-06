const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: String,
        genre: String,//ENUM Comedia, Musical, Danza, Drama, Tragedia
        director: String,
        duration: String,
        theatre: String,
        location: {
            type: {
                type: String,
            },
            coordinates: [Number],
        },
        days: String,
        time: Date,
        price: Number,
        imageUrl: String
    },
    {
        
        timestamps: true,
    }
);
eventSchema.index({ location: "2dsphere" });

const Event = model("Event", eventSchema);

module.exports = Event;

