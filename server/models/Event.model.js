const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: true},
        genre: {
            type: String,
            enum:['Comedia', 'Musical', 'Danza', 'Drama', 'Tragedia']
        },
        director: {
            type: String,
            required: true},
        duration: String,
        theatre: {
            type: String,
            required: true},
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

