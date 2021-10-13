const fs = require("fs");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  fs.readdir("C:\\program Files", (err, data) => {
    if (err) {
      console.log(`Error: ${err.message}`);
    }

    console.log(data);
    res.send(
      data
        .map((f) => {
          return f.includes(".")
            ? `<div style="color:grey;font-size:15px">💾${f}</div>`
            : `<div style="color:black;font-size:15px">📁${f}</div>`;
        })
        .join(" ")
    );
  });
});
const PORT = process.env.PORT || 3000;
const loadApp = () => {
  try {
    app.listen(PORT, (err) =>
      console.log(`The server is looking for request at Port: ${PORT}`)
    );
  } catch (error) {
    if (error) console.log(`Error:${error.message}`);
  }
};
loadApp();
