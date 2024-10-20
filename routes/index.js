const router = require('express').Router();

router.use('/', require('./swagger'));
// router.use('/cars', require('./cars'));

// routes/index.js
router.use('/ferrari', require('./ferrari'));
router.use('/ford', require('./ford'));


router.get('/', (req, res) => {
  res.send('Welcome to B&V Car Shop! We will have a homepage up soon.');
});


module.exports = router;
