const app = require(`./app.js`);
const DatabaseConenction = require(`./config/database`);
const dotenv = require(`dotenv`);

dotenv.config({ path: `backend/config/config.env` });

DatabaseConenction();

app.listen(process.env.PORT, () => {
  console.log(`Server started running on port ${process.env.PORT}`);
});
