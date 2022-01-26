const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
const cors = require("cors");

const PORT = 5005;
const requestopts = {
  convert: "USD",
  headers: {
    "X-CMC_PRO_API_KEY": "9255cf09-24e4-4e97-bb2b-33e5234c4658",
  },
};

app.use([express.json({ extended: false }), cors()]);

app.get("/top", (req, res) => {
  axios
    .get(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=HNT`,
      requestopts
    )
    .then(function (response) {        
      res.json(response.data);
      console.log(response.data)
    })
    .catch(function (error) {
      res.json(error);
    });
});

if (process.env.NODE_ENV === "production") {
  //Set Static folder
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}


//App listen to PORT
app.listen(PORT, function () {
  console.log(`Express server listening on port ${PORT}`);
});
