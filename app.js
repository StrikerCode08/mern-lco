require("dotenv").config();
const express = require("express");
const app = express();
const connectWithDb = require("./config/db");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const auth = require("./routes/auth");

//database connection
connectWithDb();

// Middlewares
app.use(bodyParser.json());
app.use(cookieParser);
app.use(cors());

//Routes
app.use("/api", auth);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
