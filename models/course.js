const mongoose = require("mongoose");


const courseSchema = mongoose.Schema(
  {
    name: {
      type:String,
      required:true,
    },
    thumbnail: String,
    videos: [{ title: String, videoUrl: String , duration : String}],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("course", courseSchema);
