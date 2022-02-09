# poll-application
Application which displays a list of available polls and users have the ability to vote anonymously, they also have the ability to paginate between polls.

## API
Backend API Routes list:

#### `GET /api/polls?page={page}`
* List all polls including their options and votes with the paginate option.

#### `POST /api/poll/add-poll`
* Add a new poll

#### `GET /api/poll/{poll}/vote/{option}`
* Submit a vote to a poll's specific option

`poll` = Poll ID

`option` = Option index from the array of options



## Configuration

You should set up the `.env` file at `server` folder:

```sh
MONGODB_URL=
PORT=
POLL_API_KEY=
```
You should set up the `.env` file at `client` folder:

```sh
REACT_APP_POLL_API_KEY=
REACT_APP_BACKEND_URL=
```

## Installation

Start the application in `development` enviroment.

To install from GitHub, clone the repository and install dependencies using `npm`:
```
$ git clone git://github.com/katrieltsepelevish/poll-application.git
$ cd poll-application

$ cd server
$ npm install
$ npm run dev

$ cd ..

$ cd client
$ npm install
$ npm start
```
