import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateRegistered: {
    type: Date,
    default: Date.now,
  },
});

// Duplicate the ID field
userSchema.virtual("id").get(function () {
  this._id.toHexString();
});

// Ensure virtual fields are serialized
userSchema.set("toJSON", {
  virtuals: true,
});

const User = mongoose.model("User", userSchema);

export default User;
