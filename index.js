const express = require("express");
const { env } = require("./enviroments");
const router = require("./routes/web");
const app = express();
const port = env.port;
app.use("/", router);

app.get("/", function (req, res) {
  res.send("oke");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
