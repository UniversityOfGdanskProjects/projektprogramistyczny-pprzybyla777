const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const timestamp = require('mongoose-timestamp');
const Comment = require("./Comment")

autoIncrement.initialize(mongoose.connection);

const pizzaSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  toppings: [{
      type: String,
      required: true
  }],
  price: {
      small: {
          type: Number,
          required: true
      },
      large: {
          type: Number,
          required: true
      }
  },
  vegan: {
      type: Boolean,
      required: true
  },
  imageUrl: {
      type: String,
      required: true,
      match: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  },
  comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
  }]
});

pizzaSchema.plugin(autoIncrement.plugin, {
  model: 'Pizza',
  field: 'id',
  startAt: 1,
  incrementBy: 1
});

pizzaSchema.plugin(timestamp);

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;