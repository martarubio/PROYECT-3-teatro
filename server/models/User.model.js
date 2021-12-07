const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: String,
    name: String,
    roles: {
      type: String,
      enum: ['admin', 'moderator']
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    events_attended: {
      type: { type: Schema.Types.ObjectId, ref: "Event" }
    },
  },
  {
    timestamps: true,
  }

);

const User = model("User", userSchema);

module.exports = User;
