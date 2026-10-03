const Blog = require("../models/Blog");

// Generate Blog
const generateBlog = (req, res) => {
    try {
        const { topic } = req.body;

        if (!topic) {
            return res.status(400).json({
                success: false,
                message: "Please provide a topic"
            });
        }

        const blog = `
Introduction

${topic} is an important topic in today's world. It is widely used in modern technology and has many useful applications.

Main Points

${topic} helps people improve their work, save time, and solve problems efficiently.

Advantages

The main advantages of ${topic} include better productivity, improved efficiency, and reduced manual work.

Applications

${topic} is used in education, business, healthcare, communication, and many other areas.

Conclusion

In conclusion, ${topic} is an important technology for the modern world.
`;

        res.json({
            success: true,
            topic: topic,
            blog: blog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};

// Save Blog
const saveBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({
                success: false,
                message: "Title, content and author are required"
            });
        }

        const blog = new Blog({
            title,
            content,
            author
        });

        const savedBlog = await blog.save();

        res.status(201).json({
            success: true,
            message: "Blog saved successfully",
            blog: savedBlog
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to save blog",
            error: error.message
        });
    }
};

// Get All Blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        res.json({
            success: true,
            count: blogs.length,
            blogs: blogs
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to get blogs",
            error: error.message
        });
    }
};

module.exports = {
    generateBlog,
    saveBlog,
    getBlogs
};