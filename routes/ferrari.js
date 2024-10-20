// routes/ferrari.js
const express = require('express');
const router = express.Router();
const ferrariController = require('../controllers/ferrari');
const { ferrariValidationSchema } = require('../validation/dataValidation');
// const { isAuthenticated } = require("../middleware/authenticate");

function validateFerrari(req, res, next) {
    const { error } = ferrariValidationSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const validationErrors = error.details.map(err => err.message);
        return res.status(400).json({ errors: validationErrors });
    }
    next();
}

router.get('/', ferrariController.getAllFerraris);
router.get('/:id', ferrariController.getSingleFerrari);
router.post('/', validateFerrari, ferrariController.createFerrari);
router.put('/:id', validateFerrari, ferrariController.updateFerrari);
router.delete('/:id', ferrariController.deleteFerrari);

// In routes/ferrari.js
console.log('Ferrari Routes Loaded'); // Check if routes are being loaded

router.get('/', (req, res) => {
    console.log('GET all Ferraris hit'); // Check if this route is being hit
    ferrariController.getAllFerraris(req, res);
});


module.exports = router;