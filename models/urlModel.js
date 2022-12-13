import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    urlId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const urlModel = mongoose.model("url", urlSchema);
export default urlModel;
