import urlModel from "../models/urlModel.js";
import validUrl from "valid-url";
import { nanoid } from "nanoid";

// @desc redirecting to short url
// @route GET /:id
// @access PUBLIC
const redirectUrl = async (req, res) => {
  try {
    const urlResponse = await urlModel.findOne({ urlId: req.params.id });

    if (urlResponse) return res.redirect(urlResponse.url);
    else return res.status(404).json({ message: "No url found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

// @desc Creating new short url
// @route POST /create
// @access PUBLIC
const createUrl = async (req, res) => {
  const { url } = req.body;

  try {
    if (!validUrl.isUri(process.env.BASE_URL)) {
      return res.status(401).json({ message: "Invalid Base URL!" });
    }

    if (validUrl.isUri(url)) {
      let urlResponse = await urlModel.findOne({ url });

      if (urlResponse) {
        res.json(urlResponse);
      } else {
        const urlId = nanoid(5);
        const shortUrl = `${process.env.BASE_URL}/${urlId}`;

        urlResponse = await urlModel.create({
          url,
          shortUrl,
          urlId,
        });

        res.json(urlResponse);
      }
    } else {
      console.log("Invalid Url");
      res.status(401).json({ message: "Invalid Url!" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error!" });
  }
};

export { redirectUrl, createUrl };
