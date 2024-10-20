const express = require('express');
const router = express.Router();
const ferrariController = require('../controllers/ferrari');
const { ferrariValidationSchema } = require('../validation/dataValidation');

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

router.get('/', (req, res) => {
    ferrariController.getAllFerraris(req, res);
});

module.exports = router;