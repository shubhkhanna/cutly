const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");

// create express app
const app = express();

// port number
const port = process.env.PORT || 5000;

// configure .env file
dotenv.config();

// Connecting to MongoDB
connectDB();

// handle CORS errors
app.use(cors());

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

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
