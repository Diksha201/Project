require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const passport = require('passport'); 
 // your passport config
const cors = require('cors');
const morgan = require('morgan');

require("./config/passport"); 

connectDB();

const app = express();
app.use(morgan('dev'));

// For normal JSON endpoints
app.use(express.json());

// CORS
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:3000', credentials: true }));

// Initialize passport (for oauth)
app.use(passport.initialize());

// Routes
app.use('/api/auth', require('./routes/auth')); // login/register/OAuth
app.use('/api/vendors', require('./routes/vendor'));
// app.use('/api/bookings', require('./routes/booking'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/venues', require('./routes/venue'));
app.use("/api/wishlist", require("./routes/wishlist"));
app.use("/api/bookings", require("./routes/booking"));
app.use("/api/address", require("./routes/address"));
app.use("/api/payments", require("./routes/payments"));


// Note: Stripe webhook route uses express.raw in routes/payment.js
app.get("/", (req, res) => {
  res.send("VivaahVows Backend is Running ");
});
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
