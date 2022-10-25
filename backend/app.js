const express = require(`express`);

const app = express();
app.use(express.json());

const property = require(`./routes/PropertyRoute`);

app.use("api/v1", property);

module.exports = app;
