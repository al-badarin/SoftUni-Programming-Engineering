const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [5, "Title should be at least 5 characters"],
    },
    type: {
      type: String,
      required: [true, "Type is required"],
      minlength: [3, "Type should be a minimum of 3 characters long"],
    },
    certificate: {
      type: String,
      required: [true, "Certificate is required"],
      minlength: [2, "Certificate should be a minimum of 2 characters long"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
      match: [
        /^https?:\/\//,
        "Course Image should start with http:// or https://",
      ],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description should be a minimum of 10 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    signUpList: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    // createdAt: {
    //   type: Date,
    // },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Owner is required"],
    },
  },
  { timestamps: true }
);

// courseSchema.pre("save", function () {
//   if (!this.createdAt) {
//     this.createdAt = Date.now();
//   }
// });

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;