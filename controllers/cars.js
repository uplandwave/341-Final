const Car = require('../models/Car');

const getAll = async (req, res, next) => {
  /*
    #swagger.tags=['Cars']
  */

  try {
    const cars = await Car.find({});

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(cars);
  } catch (error) {
    console.log('Error:', error.message);
    next(error);
    // res.status(500).json({ error: error.message });
  }
};

const getSingle = async (req, res, next) => {
  /*
    #swagger.tags=['Cars']
  */

  const carId = req.params.carId;

  try {
    const car = await Car.findById(carId).exec();

    // Check if car exists
    if (!car) {
      return res.status(404).json({
        error: `Car with id: '${carId}' does not exist.`,
      });
    }

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(car);
  } catch (error) {
    console.log('Error:', error.message);
    next(error);
    // res.status(500).json({ error: error.message });
  }
};

const addNew = async (req, res, next) => {
  /*
    #swagger.tags=['Cars']
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create a new Car',
      schema: {
        brandName: 'Ferrari',
        model: 'Ferrari Test',
        year: 2024,
        engine: '3.9L V8',
        horsepower: 661,
        top_speed: "205 mph",
      }
    }
    #swagger.parameters=[
        {
        "name": "carImageFile",
        "in": "formData",
        "description": "Car Image file to upload",
        "required": true,
        "type": "file"
        }
    ] 
  */
  const { model, year, engine, horsepower, top_speed } = req.body;

  try {
    const newCar = await Car.create({
      model: model,
      year: year,
      engine: engine,
      horsepower: horsepower,
      top_speed: top_speed,
    });

    //if all goes well, return success status
    res.status(201).json(newCar);
  } catch (error) {
    console.log('Error:', error.message);
    next(error);
    // res.status(500).json({ error: error.message });
  }
};

const editSingle = async (req, res, next) => {
  /*
    #swagger.tags=['Cars']
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create a new Car',
      schema: {
        brandName: 'Ferrari',
        model: 'Ferrari Testing',
        year: 2024,
        engine: '3.9L V8',
        horsepower: 661,
        top_speed: "300 mph",
      }
    }
    #swagger.description = 'Change model to Ferrari Testing instead of Ferrari Test and top_speed to 300 mph instead of 205 mph'
  */
  const carId = req.params.carId;

  const { model, year, engine, horsepower, top_speed } = req.body;

  try {
    // Fetch the account document based on accountName
    let car = await Car.findOne({
      car: carId,
    });

    const updateCriteria = { _id: carId };
    const updatedCar = await Car.findOneAndUpdate(
      updateCriteria,
      {
        $set: {
          model: model,
          year: year,
          engine: engine,
          horsepower: horsepower,
          top_speed: top_speed,
        },
      },
      { new: true } // Return the updated document
    );

    if (!updatedCar) {
      return res
        .status(404)
        .json({ message: 'This car could not be updated.' });
    }

    //if all goes well, return accepted status
    res.status(202).json(updatedCar);
  } catch (error) {
    console.log('Error:', error.message);
    next(error);
  }
};

//DELETE
const deleteSingle = async (req, res, next) => {
  /*
    #swagger.tags=['Cars']
  */
  const carId = req.params.carId;

  try {
    const car = await Car.findOneAndDelete({
      _id: carId,
    });

    console.log(car);
    if (!car) {
      return res.status(404).json({
        message: `You are not authorized to delete that car.`,
      });
    }

    res.status(204).send();
  } catch (error) {
    console.log('Error:', error.message);
    next(error);
    // res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  addNew,
  editSingle,
  deleteSingle,
};
