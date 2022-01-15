const express = require('express');
const appRouter = express.Router();

const pollController = require('./controllers/PollController');
const checkApiKey = require('./middlewares/checkApiKey');

appRouter.get('/polls', pollController.getByPage);
appRouter.post('/poll/add-poll', checkApiKey, pollController.add);
appRouter.get('/poll/:pollId/vote/:option', pollController.vote);

module.exports = appRouter;