// // const Car = require('../models/Car');

// // const getAll = async (req, res, next) => {
// //   /*
// //     #swagger.tags=['Cars']
// //   */

// //   try {
// //     const cars = await Car.find({});

// //     res.setHeader('Content-Type', 'application/json');
// //     res.status(200).json(cars);
// //   } catch (error) {
// //     console.log('Error:', error.message);
// //     next(error);
// //     // res.status(500).json({ error: error.message });
// //   }
// // };

// // const getSingle = async (req, res, next) => {
// //   /*
// //     #swagger.tags=['Cars']
// //   */

// //   const carId = req.params.carId;

// //   try {
// //     const car = await Car.findById(carId).exec();

// //     // Check if car exists
// //     if (!car) {
// //       return res.status(404).json({
// //         error: `Car with id: '${carId}' does not exist.`,
// //       });
// //     }

// //     res.setHeader('Content-Type', 'application/json');
// //     res.status(200).json(car);
// //   } catch (error) {
// //     console.log('Error:', error.message);
// //     next(error);
// //     // res.status(500).json({ error: error.message });
// //   }
// // };

// // const addNew = async (req, res, next) => {
// //   /*
// //     #swagger.tags=['Cars']
// //     #swagger.parameters['body'] = {
// //       in: 'body',
// //       description: 'Create a new Car',
// //       schema: {
// //         brandName: 'Ferrari',
// //         model: 'Ferrari Test',
// //         year: 2024,
// //         engine: '3.9L V8',
// //         horsepower: 661,
// //         top_speed: "205 mph",
// //       }
// //     }
// //     #swagger.parameters=[
// //         {
// //         "name": "carImageFile",
// //         "in": "formData",
// //         "description": "Car Image file to upload",
// //         "required": true,
// //         "type": "file"
// //         }
// //     ] 
// //   */
// //   const { model, year, engine, horsepower, top_speed } = req.body;

// //   try {
// //     const newCar = await Car.create({
// //       model: model,
// //       year: year,
// //       engine: engine,
// //       horsepower: horsepower,
// //       top_speed: top_speed,
// //     });

// //     //if all goes well, return success status
// //     res.status(201).json(newCar);
// //   } catch (error) {
// //     console.log('Error:', error.message);
// //     next(error);
// //     // res.status(500).json({ error: error.message });
// //   }
// // };

// // const editSingle = async (req, res, next) => {
// //   /*
// //     #swagger.tags=['Cars']
// //     #swagger.parameters['body'] = {
// //       in: 'body',
// //       description: 'Create a new Car',
// //       schema: {
// //         brandName: 'Ferrari',
// //         model: 'Ferrari Testing',
// //         year: 2024,
// //         engine: '3.9L V8',
// //         horsepower: 661,
// //         top_speed: "300 mph",
// //       }
// //     }
// //     #swagger.description = 'Change model to Ferrari Testing instead of Ferrari Test and top_speed to 300 mph instead of 205 mph'
// //   */
// //   const carId = req.params.carId;

// //   const { model, year, engine, horsepower, top_speed } = req.body;

// //   try {
// //     // Fetch the account document based on accountName
// //     let car = await Car.findOne({
// //       car: carId,
// //     });

// //     const updateCriteria = { _id: carId };
// //     const updatedCar = await Car.findOneAndUpdate(
// //       updateCriteria,
// //       {
// //         $set: {
// //           model: model,
// //           year: year,
// //           engine: engine,
// //           horsepower: horsepower,
// //           top_speed: top_speed,
// //         },
// //       },
// //       { new: true } // Return the updated document
// //     );

// //     if (!updatedCar) {
// //       return res
// //         .status(404)
// //         .json({ message: 'This car could not be updated.' });
// //     }

// //     //if all goes well, return accepted status
// //     res.status(202).json(updatedCar);
// //   } catch (error) {
// //     console.log('Error:', error.message);
// //     next(error);
// //   }
// // };

// // //DELETE
// // const deleteSingle = async (req, res, next) => {
// //   /*
// //     #swagger.tags=['Cars']
// //   */
// //   const carId = req.params.carId;

// //   try {
// //     const car = await Car.findOneAndDelete({
// //       _id: carId,
// //     });

// //     console.log(car);
// //     if (!car) {
// //       return res.status(404).json({
// //         message: `You are not authorized to delete that car.`,
// //       });
// //     }

// //     res.status(204).send();
// //   } catch (error) {
// //     console.log('Error:', error.message);
// //     next(error);
// //     // res.status(500).json({ error: error.message });
// //   }
// // };

// // module.exports = {
// //   getAll,
// //   getSingle,
// //   addNew,
// //   editSingle,
// //   deleteSingle,
// // };

// const Car = require('../models/car');
// const Brand = require('../models/Brand'); 

// const getAll = async (req, res, next) => {
//   /*
//     #swagger.tags=['Cars']
//   */

//   try {
//     // Fetch all brands
//     const brands = await Brand.find({});
//     console.log('Fetched Brands:', brands); // Log the fetched brands

//     if (!brands.length) {
//       console.log('No brands found.');
//       return res.status(404).json({ message: 'No brands available.' });
//     }

//     // Fetch the first 10 cars for each brand
//     const cars = await Promise.all(brands.map(async (brand) => {
//       const brandCars = await Car.find({ brandName: brand.brandName }).limit(10);
//       console.log(`Fetched Cars for ${brand.brandName}:`, brandCars); // Log fetched cars for each brand
//       return brandCars;
//     }));

//     // Flatten the array of arrays into a single array
//     const flattenedCars = cars.flat();
//     console.log('All Fetched Cars:', flattenedCars); // Log all fetched cars

//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(flattenedCars);
//   } catch (error) {
//     console.error('Error fetching cars:', error.message); // Log specific error
//     next(error);
//   }
// };

// const getSingle = async (req, res, next) => {
//   /*
//     #swagger.tags=['Cars']
//   */

//   const carId = req.params.carId;

//   try {
//     const car = await Ferrari.findById(carId).exec() || 
//                 await Ford.findById(carId).exec() || 
//                 await Porsche.findById(carId).exec();

//     // Check if car exists
//     if (!car) {
//       return res.status(404).json({
//         error: `Car with id: '${carId}' does not exist.`,
//       });
//     }

//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(car);
//   } catch (error) {
//     console.log('Error:', error.message);
//     next(error);
//     // res.status(500).json({ error: error.message });
//   }
// };

// const addNew = async (req, res, next) => {
//   /*
//     #swagger.tags=['Cars']
//     #swagger.parameters['body'] = {
//       in: 'body',
//       description: 'Create a new Car',
//       schema: {
//         model: 'Ferrari Test',
//         year: 2024,
//         engine: '3.9L V8',
//         horsepower: 661,
//         top_speed: "205 mph",
//       }
//     }
//     #swagger.parameters=[
//         {
//         "name": "carImageFile",
//         "in": "formData",
//         "description": "Car Image file to upload",
//         "required": true,
//         "type": "file"
//         }
//     ] 
//   */
//   const { model, year, engine, horsepower, top_speed, brand } = req.body;

//   try {
//     let newCar;
//     if (brand === 'Ferrari') {
//       newCar = await Ferrari.create({
//         model: model,
//         year: year,
//         engine: engine,
//         horsepower: horsepower,
//         top_speed: top_speed,
//       });
//     } else if (brand === 'Ford') {
//       newCar = await Ford.create({
//         model: model,
//         year: year,
//         engine: engine,
//         horsepower: horsepower,
//         top_speed: top_speed,
//       });
//     } else if (brand === 'Porsche') {
//       newCar = await Porsche.create({
//         model: model,
//         year: year,
//         engine: engine,
//         horsepower: horsepower,
//         top_speed: top_speed,
//       });
//     } else {
//       return res.status(400).json({ error: "Invalid car brand." });
//     }

//     // If all goes well, return success status
//     res.status(201).json(newCar);
//   } catch (error) {
//     console.log('Error:', error.message);
//     next(error);
//     // res.status(500).json({ error: error.message });
//   }
// };

// const editSingle = async (req, res, next) => {
//   /*
//     #swagger.tags=['Cars']
//     #swagger.parameters['body'] = {
//       in: 'body',
//       description: 'Update a Car',
//       schema: {
//         model: 'Ferrari Testing',
//         year: 2024,
//         engine: '3.9L V8',
//         horsepower: 661,
//         top_speed: "300 mph",
//       }
//     }
//     #swagger.description = 'Update the car details'
//   */
//   const carId = req.params.carId;
//   const { model, year, engine, horsepower, top_speed } = req.body;

//   try {
//     const updateCriteria = { _id: carId };
//     const updatedCar = await Ferrari.findOneAndUpdate(updateCriteria, {
//       $set: { model, year, engine, horsepower, top_speed },
//     }, { new: true }) ||
//     await Ford.findOneAndUpdate(updateCriteria, {
//       $set: { model, year, engine, horsepower, top_speed },
//     }, { new: true }) ||
//     await Porsche.findOneAndUpdate(updateCriteria, {
//       $set: { model, year, engine, horsepower, top_speed },
//     }, { new: true });

//     if (!updatedCar) {
//       return res.status(404).json({ message: 'This car could not be updated.' });
//     }

//     // If all goes well, return accepted status
//     res.status(202).json(updatedCar);
//   } catch (error) {
//     console.log('Error:', error.message);
//     next(error);
//   }
// };

// // DELETE
// const deleteSingle = async (req, res, next) => {
//   /*
//     #swagger.tags=['Cars']
//   */
//   const carId = req.params.carId;

//   try {
//     const car = await Ferrari.findOneAndDelete({ _id: carId }) ||
//                 await Ford.findOneAndDelete({ _id: carId }) ||
//                 await Porsche.findOneAndDelete({ _id: carId });

//     if (!car) {
//       return res.status(404).json({
//         message: `You are not authorized to delete that car.`,
//       });
//     }

//     res.status(204).send();
//   } catch (error) {
//     console.log('Error:', error.message);
//     next(error);
//     // res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   getAll,
//   getSingle,
//   addNew,
//   editSingle,
//   deleteSingle,
// };
