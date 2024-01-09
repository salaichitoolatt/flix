const express = require("express");
const app = express();
const fs = require("fs");

if (!process.env.PORT) {
    throw new Error("Please set the port number");
}

const PORT = process.env.PORT;

app.get("/video", (req, res) => {
  const path = "./videos/sample1.mp4";
  fs.stat(path, (err, stats) => {
    if (err) {
      console.error("An error occurred.");
      res.sendStatus(500);
      return;
    }

    res.writeHead(200, {
      "Content-Length": stats.size,
      "Content-Type": "video/mp4",
    });

    fs.createReadStream(path).pipe(res);
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
