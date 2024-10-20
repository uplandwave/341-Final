const express = require('express');
const router = express.Router();
const fordController = require('../controllers/ford');
const { fordValidationSchema } = require('../validation/dataValidation');

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

router.get('/', (req, res) => {
    fordController.getAllFords(req, res);
});

module.exports = router;