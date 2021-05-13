require('dotenv').config();
const server = require("./api/server.js");

const port = process.env.PORT || 5000;
// heroku works a certain way with port
// if the port isnt defined, it'll auto to 5000, otherwise it will take the port
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
