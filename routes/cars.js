const routes = require('express').Router();
const carController = require('../controllers/cars.js');
// const utilities = require('../utilities/');
// const carRules = require('../utilities/car-validation.js');
// const { ensureAuth } = require('../utilities/auth.js');

// GET Car Route
routes.get(
  '/',
  carController.getAll,
//   utilities.handleErrors
);
routes.get(
  '/:carId',
  carController.getSingle,
//   utilities.handleErrors
);

routes.post(
  '/',
//   ensureAuth,
//   carRules.carValidationRules(),
//   utilities.validate,
  carController.addNew,
//   utilities.handleErrors
);

// UPDATE Car Route
routes.put(
  '/:carId',
//   ensureAuth,
//   carRules.carValidationRules(),
//   utilities.validate,
  carController.editSingle,
//   utilities.handleErrors
);

// DELETE Car Route
routes.delete(
  '/:carId',
//   ensureAuth,
  carController.deleteSingle,
//   utilities.handleErrors
);


module.exports = routes;
