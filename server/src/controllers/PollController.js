const HttpStatus = require('http-status-codes');
const logger = require('../logger');

const Poll = require('../models/poll');
const { validate } = require('../utils/validation');
const { pollAddSchema } = require('../validations/pollSchema');

/**
 * Poll controller
 */
class PollController {
    static async getByPage(req, res) {
        const pageOptions = {
            limit: 3,
            page: parseInt(req.query.page, 10) || 0
        }

        const pollList = await Poll.find()
            .skip(pageOptions.page * pageOptions.limit)
            .limit(pageOptions.limit)
            .exec();

		return res.status(HttpStatus.OK).json({
            data: pollList,
            complete: pollList.length < pageOptions.limit,
            page: pageOptions.page
        });
    }

    static async add(req, res) {
        const data = await validate(req.body, pollAddSchema);

        if (data.errors && data.errors.length > 0) {
			return res.status(HttpStatus.BAD_REQUEST).send(data);
		}

        const poll = await Poll.findOne({ title: req.body.title }).exec();

		if (poll) {
			return res.status(HttpStatus.CONFLICT).send('Poll already exists.');
		}

        const newPoll = new Poll({ ...req.body });

        await newPoll.save();

        logger.info(`‘New poll created {${newPoll._id}}`);

        return res.status(HttpStatus.OK).json(newPoll);
    }

    static async vote(req, res) {
        const { pollId, option } = req.params;

        const poll = await Poll.findOne({ _id: pollId }).exec();

		if (! poll) {
			return res.status(HttpStatus.CONFLICT).send('Poll does not exist.');
		}

        const selectedOptionIndex = poll.options.findIndex(x => x.option == option);

        if(selectedOptionIndex < 0) { // Returns -1 when index doesn't exist
            return res.status(HttpStatus.CONFLICT).send('Option does not exist in Poll.');
        }

        poll.options[selectedOptionIndex].vote++;

        const updatedPoll = await Poll.findOneAndUpdate({ _id: pollId }, { options: poll.options }, { returnOriginal: true });

        logger.info(`‘New vote casted to poll {${poll._id}}, option: {${option}}`);

        return res.status(HttpStatus.OK).json(updatedPoll);
    }
}

module.exports = {
    getByPage: PollController.getByPage,
    add: PollController.add,
    vote: PollController.vote
}