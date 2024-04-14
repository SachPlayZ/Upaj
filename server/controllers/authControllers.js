const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
    try {
      const { fullname, email, password, confirm_password } = req.body;
      if (!email || !password || !fullname || !confirm_password) {
        return res.status(400).json({ success: false, error: 'Please enter all fields' });
      }
  
      if (password !== confirm_password) {
        return res.json({ success: false, error: 'Passwords do not match' });
      }
  
      if (password.length < 6) {
        return res.json({ success: false, error: 'Password must be at least 6 characters' });
      }
      const exist = await User.findOne({ email });
      if (exist) {
        return res.json({ success: false, error: 'User already exists' });
      }
      const user = await User.create({ 
        fullname, 
        email, 
        password: await hashPassword(password)
    });
      return res.json({ success: true, user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'An error occurred while registering the user' });
    }
  };
  
const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ success: false, error: 'Please enter all fields' });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ success: false, error: 'User does not exist' });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.json({ success: false, error: 'Invalid credentials' });
      }
      if (match) {
        
          jwt.sign({email: user.email, id: user._id, fullname: user.fullname}, process.env.JWT_SECRET, {}, (err, token) => {
              if (err) throw err;
              res.cookie('token', token).json({ success: true, token, user });
      });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error: 'An error occurred while logging in' });
    }
  };
  
  const getProfile = async (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {} , (err, user) => {
            if (err) throw err;
            res.json(user)

    });
  } else {
     res.json(null)
  }
    }

const test = (req, res) => {
    res.json('test works')
}
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}