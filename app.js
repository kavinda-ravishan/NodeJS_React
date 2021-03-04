const express = require("express");
app = express();

require("dotenv").config();
app.set("view engine", "ejs");
app.use("/api/", require("./routes/hello"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on PORT : ${PORT}`);
});
