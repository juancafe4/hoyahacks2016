const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost/nutriday';

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

require('mongoose').connect(MONGODB_URL, err => {
  if (err) throw err;
  console.log(`MongoDB connected to ${MONGODB_URL}`);
});

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
} else {
  const webpack = require('webpack');
  const webpackConfig = require('../webpackDev');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler));
}

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/api', require('./routes/api'));

app.get('*', (requires) => {
  let indexPath = path.join(__dirname, '../index.html');
  res.sendFile(indexPath);
});

app.listen(PORT, err => {
  if (err) throw err;
  console.log(`Server listening on localhost ${PORT}`);
});
