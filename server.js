require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 5000;

// JSON middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

// Blog routes
const blogRoutes = require("./Routes/blogRoutes");

// IMPORTANT: Blog CRUD routes
app.use("/api/blogs", blogRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("AI BlogNest API is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});