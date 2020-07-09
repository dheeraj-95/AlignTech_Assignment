const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const notepadRouter = require('./routes/notepadRoutes');

const app = express();

// Post forms instead of API's
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/users', userRouter);
app.use('/notepad', notepadRouter);

module.exports = app;