// routes/ford.js
const express = require('express');
const router = express.Router();
const fordController = require('../controllers/ford');
const { fordValidationSchema } = require('../validation/dataValidation');
// const { isAuthenticated } = require("../middleware/authenticate");

function validateFord(req, res, next) {
    const { error } = fordValidationSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const validationErrors = error.details.map(err => err.message);
        return res.status(400).json({ errors: validationErrors });
    }
    next();
}

router.get('/', fordController.getAllFords);
router.get('/:id', fordController.getSingleFord);
router.post('/', validateFord, fordController.createFord);
router.put('/:id', validateFord, fordController.updateFord);
router.delete('/:id', fordController.deleteFord);

// In routes/ford.js
console.log('Ford Routes Loaded'); // Check if routes are being loaded

router.get('/', (req, res) => {
    console.log('GET all Fords hit'); // Check if this route is being hit
    fordController.getAllFords(req, res);
});


module.exports = router;