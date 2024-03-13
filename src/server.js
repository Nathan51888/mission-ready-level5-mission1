const express = require("express");
const app = express();

app.use(express.json());

const api1Router = require("./routes/api1Router");

app.use("/api/1", api1Router);
app.get("/", (req, res) => {
  res.send("Hey backend is running yoooooo~😉 ya see its up");
});

const port = process.env.port || 8080;
app
  .listen(port, () => {
    console.log(`Server is live at http://localhost:${port}`);
  })
  .on("error", (error) => console.log(error));
