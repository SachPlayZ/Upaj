const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {mongoose} = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

dotenv.config();
const db = process.env.MONGO_URI;
mongoose.connect(db).then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => {
    console.log('Error connecting to MongoDB', err);
    }
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', require('./routes/authRoutes'));
app.use('/api', require('./routes/productRoutes'));


const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

