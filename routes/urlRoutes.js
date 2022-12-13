const express = require("express");
const router = express.Router();
const { redirectUrl, createUrl } = require("../controllers/urlControllers");

router.route("/:id").get(redirectUrl);
router.route("/create").post(createUrl);

module.exports = router;
