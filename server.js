const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB("MongoDB Connected...".bold.cyan);

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact Keeper API!" })
);

// Define Routes
app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`.bold.yellow)
);
