import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", urlRoutes);

// Serve Static assets in production
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
