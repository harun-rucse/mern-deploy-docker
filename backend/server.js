const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/.env.${process.env.NODE_ENV}` });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('DB connection successful!');
  })
  .catch((err) => {
    console.log('DB connection failed!');
  });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
