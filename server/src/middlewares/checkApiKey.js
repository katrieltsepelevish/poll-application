const HttpStatus = require('http-status-codes');

const config = require('../config');

const checkApiKey = (req, res, next) => {
    const pollApiKey = req.headers['poll-api-key'];

    if(! pollApiKey) 
        return res.status(HttpStatus.UNAUTHORIZED).send('Api key does not exist in headers.');

    if(pollApiKey !== config.pollApiKey) 
        return res.status(HttpStatus.UNAUTHORIZED).send('Api key is not correct.');

    next();
}

module.exports = checkApiKey;