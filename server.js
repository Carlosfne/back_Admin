const express = require('express'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      requireDir = require('require-dir'),
      morgan = require('morgan'),
      bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))
app.use(morgan('dev'));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', 
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
);
// mongoose.connect('mongodb://user@password') caso tenha senha no BD
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);