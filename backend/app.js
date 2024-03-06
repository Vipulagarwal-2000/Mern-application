const express = require('express');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();
const port="5000";

app.use(bodyParser.json());

app.use('/api/places', placesRoutes); 
app.use('/api/users', usersRoutes);


//route not found HttpError is an alias
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

//default error handler
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(port, ()=>{
  console.log(`port listening at ${port}`)
});