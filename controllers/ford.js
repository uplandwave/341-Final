const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllFords = async (req, res) => { 
    try {
        const result = await mongodb.getDatabase().db().collection('ford').find().toArray();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving fords', error: err });
    }
};

const getSingleFord = async (req, res) => {
    try {
        const fordId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('ford').findOne({ _id: fordId });

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'ford not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving ford', error: err });
    }
};

const createFord = async (req, res) => {
  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create a new Car',
      required: true,
      schema: {
        type: 'object',
        properties: {
          model: { type: 'string', example: 'Ford 488 GTB' },
          year: { type: 'integer', example: 2024 },
          engine: { type: 'string', example: '3.9L V8' },
          horsepower: { type: 'integer', example: 661 },
          top_speed: { type: 'string', example: '205 mph' },
          image: {type: 'string', example: 'https://example.com/ford_488_gtb.jpg' }
        }
      }
    }
  */
    try {
        const response = await mongodb.getDatabase().db().collection('ford').insertOne(req.body);

        if (response.acknowledged) {
            res.status(201).json({ message: 'ford created successfully' });
        } else {
            res.status(500).json({ message: 'Failed to create ford' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error creating ford', error: err });
    }
};

const updateFord = async (req, res) => {
      /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Create a new Car',
      required: true,
      schema: {
        type: 'object',
        properties: {
          model: { type: 'string', example: 'Ford 488 GTB' },
          year: { type: 'integer', example: 2024 },
          engine: { type: 'string', example: '3.9L V8' },
          horsepower: { type: 'integer', example: 661 },
          top_speed: { type: 'string', example: '205 mph' },
          image: {type: 'string', example: 'https://example.com/ford_488_gtb.jpg' }
        }
      }
    }
  */
    try {
        const fordId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('ford').replaceOne({ _id: fordId }, req.body);

        if (response.modifiedCount > 0) {
            res.status(200).json({ message: 'ford updated successfully' });
        } else {
            res.status(404).json({ message: 'ford not found or no changes made' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error updating ford', error: err });
    }
};

const deleteFord = async (req, res) => {
    try {
        const fordId = new ObjectId(req.params.id);
        const response = await mongodb.getDatabase().db().collection('ford').deleteOne({ _id: fordId });

        if (response.deletedCount > 0) {
            res.status(200).json({ message: 'ford deleted successfully' });
        } else {
            res.status(404).json({ message: 'ford not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting ford', error: err });
    }
};

module.exports = {
    getAllFords,
    getSingleFord,
    createFord,
    updateFord,
    deleteFord,
};
