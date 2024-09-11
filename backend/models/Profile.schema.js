import { Schema, model } from "mongoose";
import ExperiencesSchema from "./experiences.schema.js";

const ProfileSchema = new Schema(
  {
    googleId: String,
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    approved: Boolean,
    verifiedAt: Date,
    experiences: [ExperiencesSchema]
  },
  {
    collection: "profiles",
  }
);

const Profile = model("Profile", ProfileSchema);

export default Profile;
