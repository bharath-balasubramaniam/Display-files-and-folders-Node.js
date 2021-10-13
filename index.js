const fs = require("fs");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  //   fs.readdir("C:Program Files", (err, data) => {
  //     if (err) console.log(`Error: ${err.message}`);
  //     res.send(
  //       data
  //         .map((obj) => {
  //           return obj.includes(".")
  //             ? `<div style={"text-align:center"}>💾${obj}</div>`
  //             : `<div style={"text-align:center"}>📁${obj}</div>`;
  //         })
  //         .join(" ")
  //     );
  //   });
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
const PORT = process.env.PORT || 5000;
app.listen(PORT, "127.0.0.1", (err) =>
  console.log(`The server is looking for request at Port: ${PORT}`)
);
