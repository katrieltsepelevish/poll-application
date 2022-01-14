require('dotenv').config();

module.exports = {
    basePath: '/api',
    dbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/poll',
    port: process.env.PORT || 8000,
    pollApiKey: process.env.POLL_API_KEY || 'FAZ934XDF'
};