// productRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const multer = require('multer');
const cors = require('cors');

router.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
    }));

    router.get('/products/:productId', async (req, res) => {
        try {
            const productId = req.params.productId;
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch product', error: error.message });
        }
    });
// Route for fetching all products
router.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
  });

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Specify upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) // Use original filename
  }
});

const upload = multer({ storage: storage });

// Route for creating a new product
router.post('/products', upload.single('image'), async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      quantity: req.body.quantity,
      imageUrl: req.file.path // Store image path in database
    });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
