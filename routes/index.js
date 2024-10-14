const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/cars', require('./cars'));

router.get('/', (req, res) => {
  res.send('Welcome to B&V Car Shop! We will have a homepage up soon.');
});

// **separate routes for to diferent collections

// router.use('/ferrari', require('./ferrari'));
// router.use('/ford', require('./ford'));
// router.use('/porsche', require('./porsche'));

module.exports = router;
