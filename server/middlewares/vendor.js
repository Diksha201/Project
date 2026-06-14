const User = require('../models/User');

module.exports = async function (req, res, next) {
  const user = await User.findById(req.user.id);
  if (!user || user.role !== 'vendor') {
    return res.status(403).send('Vendor access only');
  }
  next();
};