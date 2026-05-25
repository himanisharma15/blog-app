const Blog = require("../models/Blog");

// GET all blogs
const getBlogs = async (req, res) => {

  try {

    const blogs = await Blog.find();

    res.json(blogs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// GET single blog
const getBlogById = async (req, res) => {

  try {

    const blog = await Blog.findById(req.params.id);

    res.json(blog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// CREATE blog
const createBlog = async (req, res) => {

  try {

    const blog = await Blog.create(req.body);

    res.status(201).json(blog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// UPDATE blog
const updateBlog = async (req, res) => {

  try {

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(blog);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// DELETE blog
const deleteBlog = async (req, res) => {

  try {

    await Blog.findByIdAndDelete(req.params.id);

    res.json({
      message: "Blog deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
};