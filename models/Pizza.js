const mongoose = require("mongoose");
const User = require("./User")

const pizzaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    topings: {
      type: [String],
      required: true,
    },
    price: {
      small: {
        type: Number,
        required: true,
      },
      large: {
        type: Number,
        required: true,
      },
    },
    imageUrl: {
      type: String,
      required: true,
    },
    notes: [
      {
        author: {
          type: mongoose.SchemaTypes.ObjectId,
          required: true,
          ref: User,
        },
        title: {
          type: String,
          required: true,
        },
        body: {
          type: String,
          required: true,
        },
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Pizza", pizzaSchema);