const express = require("express");

const router = express.Router();

const {
    generateBlog,
    saveBlog
} = require("../controllers/blogController");

// Test API
router.get("/", (req, res) => {
    res.json({
        message: "Blog API is working!"
    });
});

// Generate Blog
router.post("/generate-blog", generateBlog);

// Save Blog
router.post("/save-blog", saveBlog);

module.exports = router;