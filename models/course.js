const mongoose = require ('mongoose');
const {Schema} = require ('mongoose');

const courseSchema = new Schema ({
  name: String
},
{
  timestamps: true
}

);

module.exports = mongoose.model ('course',courseSchema);