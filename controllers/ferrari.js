const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllFerraris = async (req, res) => { 
    try {
        const result = await mongodb.getDatabase().db().collection('ferrari').find().toArray();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving ferraris', error: err });
    }
};

const getSingleFerrari = async (req, res) => {
    try {
        const ferrariId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('ferrari').findOne({ _id: ferrariId });

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'ferrari not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving ferrari', error: err });
    }
};

const createFerrari = async (req, res) => {
  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create a new Car',
      required: true,
      schema: {
        type: 'object',
        properties: {
          model: { type: 'string', example: 'Ferrari 488 GTB' },
          year: { type: 'integer', example: 2024 },
          engine: { type: 'string', example: '3.9L V8' },
          horsepower: { type: 'integer', example: 661 },
          top_speed: { type: 'string', example: '205 mph' },
          image: {type: 'string', example: 'https://example.com/ferrari_488_gtb.jpg' }
        }
      }
    }
  */
    try {
        const response = await mongodb.getDatabase().db().collection('ferrari').insertOne(req.body);

        if (response.acknowledged) {
            res.status(201).json({ message: 'ferrari created successfully' });
        } else {
            res.status(500).json({ message: 'Failed to create ferrari' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error creating ferrari', error: err });
    }
};

const updateFerrari = async (req, res) => {
      /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create a new Car',
      required: true,
      schema: {
        type: 'object',
        properties: {
          model: { type: 'string', example: 'Ferrari 488 GTB' },
          year: { type: 'integer', example: 2024 },
          engine: { type: 'string', example: '3.9L V8' },
          horsepower: { type: 'integer', example: 661 },
          top_speed: { type: 'string', example: '205 mph' },
          image: {type: 'string', example: 'https://example.com/ferrari_488_gtb.jpg' }
        }
      }
    }
  */
    try {
        const ferrariId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('ferrari').replaceOne({ _id: ferrariId }, req.body);

        if (response.modifiedCount > 0) {
            res.status(200).json({ message: 'ferrari updated successfully' });
        } else {
            res.status(404).json({ message: 'ferrari not found or no changes made' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating ferrari', error: err });
    }
};

const deleteFerrari = async (req, res) => {
    try {
        const ferrariId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('ferrari').deleteOne({ _id: ferrariId });

        if (response.deletedCount > 0) {
            res.status(200).json({ message: 'ferrari deleted successfully' });
        } else {
            res.status(404).json({ message: 'ferrari not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting ferrari', error: err });
    }
};

module.exports = {
    getAllFerraris,
    getSingleFerrari,
    createFerrari,
    updateFerrari,
    deleteFerrari,
};
