import { Schema } from "mongoose";

const ExperiencesSchema = new Schema({
  role: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    default: null,
  },
  description: {
    type: String,
    trim: true,
    minLenght: 10,
    maxLenght: 500,
  },
  area: {
    type: String,
    trim: true,
    required: true,
  },
  profileId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

export default ExperiencesSchema;
