const app = require("./app");
require('dotenv').config();
app.listen(process.env.PORT, () => {
  console.log(`Server is working on localhost:${process.env.PORT}`);
});
