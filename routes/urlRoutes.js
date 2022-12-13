import express from "express";
const router = express.Router();
import { redirectUrl, createUrl } from "../controllers/urlControllers.js";

router.route("/:id").get(redirectUrl);
router.route("/create").post(createUrl);

export default router;
