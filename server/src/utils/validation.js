const Joi = require('joi');

const validate = (input, schema) => {
    const result = schema.validate(input);

    if (result.error) {
		const field = result.error.details[0].context.key;
		const description = result.error.details[0].message;

		return {
			type: 'validation error',
			errors: [
				{
					field,
					title: description,
				},
			],
		};
	}

	return result.value;
}

module.exports = {
	validate,
};