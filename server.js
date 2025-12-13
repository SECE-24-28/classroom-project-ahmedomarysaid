const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const postSchema = new mongoose.Schema({
  product: { type: String, required: true },
  description: { type: String },
  price:{type:Number},
  image:{type:String},
  Stocks:{type:Number}
}, { timestamps: true });
const Post = mongoose.model('Post', postSchema);
// POST Route - Create a new post
app.post('/api/posts', async (req, res) => {
  try {
    const { product, description,price,image,Stocks } = req.body;

    if (!product || !price||!description||!Stocks||!image) {
      return res.status(400).json({
        success: false,
        message: 'product,price,description,Stocks and image should be provided'
      });
    }
    const post = new Post({
      product,
      description,
      price,
      image,
      Stocks
    });
    const savedPost = await post.save();
    res.status(201).json({
      success: true,
      message: 'Post created successfully!',
      post: savedPost
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// Optional: GET all posts
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Simple POST API is running! Send POST to /api/posts' });
});

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mypostdb';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Test POST → http://localhost:${PORT}/api/posts`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });