const express = require('express');
const router = express.Router();




// ** Here I set up my routes to one of my collectons and you can see below I am also validating the code

// const suppressorsController = require('../controllers/suppressors');
// const { suppressorValidationSchema } = require('../validation/dataValidation');

// function validateSuppressor(req, res, next) {
//     const { error } = suppressorValidationSchema.validate(req.body, { abortEarly: false });
//     if (error) {
//         const validationErrors = error.details.map(err => err.message);
//         return res.status(400).json({ errors: validationErrors });
//     }
//     next();
// }

// router.get('/', suppressorsController.getAllSuppressors);
// router.get('/:id', suppressorsController.getSingleSuppressor);
// router.post('/', validateSuppressor, suppressorsController.createSuppressor);
// router.put('/:id', validateSuppressor, suppressorsController.updateSuppressor);
// router.delete('/:id', suppressorsController.deleteSuppressor);

module.exports = router;
