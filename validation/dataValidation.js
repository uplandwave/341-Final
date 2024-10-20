const Joi = require('joi');

const ferrariValidationSchema = Joi.object({
    model: Joi.string().min(1).max(100).required(),
    year: Joi.number().integer().positive().required(),
    engine: Joi.string().min(1).max(100).required(),
    horsepower: Joi.number().integer().positive().required(),
    top_speed: Joi.string().min(1).max(50).required(),
    image: Joi.string().min(1).max(50).required()
});

const fordValidationSchema = Joi.object({
    model: Joi.string().min(1).max(100).required(),
    year: Joi.number().integer().positive().required(),
    engine: Joi.string().min(1).max(100).required(),
    horsepower: Joi.number().integer().positive().required(),
    top_speed: Joi.string().min(1).max(50).required(),
    image: Joi.string().min(1).max(50).required()
});

module.exports = {ferrariValidationSchema, fordValidationSchema}











// **This is how I set up simple validaton for all of my inputs.

// const gunValidationSchema = Joi.object({
//     model: Joi.string().min(1).max(100).required(),
//     caliber: Joi.string().min(1).max(50).required(),
//     magazineCapacity: Joi.number().integer().positive().required(),
//     weight: Joi.string().min(1).max(50).required(),
//     barrelLength: Joi.string().min(1).max(50).required(),
//     sights: Joi.string().min(1).max(50).required(),
//     action: Joi.string().min(1).max(50).required()
// });

// const suppressorValidationSchema = Joi.object({
//     name: Joi.string().min(1).max(100).required(),
//     caliber: Joi.string().min(1).max(100).required(),
//     weight_oz: Joi.number().positive().required(),
//     material: Joi.string().min(1).max(50).required()
// });

// module.exports = { gunValidationSchema, suppressorValidationSchema };