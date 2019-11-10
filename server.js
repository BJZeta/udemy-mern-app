const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

//Connect to MongoDataBase
connectDB();

app.get("/", (req, res) => res.send("API is running"));

//Defined Routes
app.use("/api/users", require("./routes/api/users"));

app.listen(PORT, () => console.log(`Server started on Port ${PORT}.`));
