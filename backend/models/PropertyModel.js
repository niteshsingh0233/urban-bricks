const mongoose = require(`mongoose`);

const PropertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the property name"],
  },
});

module.exports = mongoose.model("Property", PropertySchema);
