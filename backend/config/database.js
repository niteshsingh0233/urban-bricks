const mongoose = require(`mongoose`);

const DatabaseConenction = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`MongoDB conneced with server ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = DatabaseConenction;
