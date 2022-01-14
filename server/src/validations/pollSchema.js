const Joi = require('joi');

const pollAddSchema = Joi.object().keys({
	title: Joi.string().required(),
	options: Joi.array().required(),
});

module.exports = {
    pollAddSchema,
};