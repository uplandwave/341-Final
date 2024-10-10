const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Welcome to B&V Car Shop! We will have a homepage up soon.');
});

// **separate routes for to diferent collections

// router.use('/guns', require('./guns'));
// router.use('/suppressors', require('./suppressors'));

module.exports = router;
