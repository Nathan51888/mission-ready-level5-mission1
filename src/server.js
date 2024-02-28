const express = require("express");
const app = express();

app.use(express.json());

const api1Router = require("./routes/api1Router");

app.use("/api/1", api1Router);

const port = 4000;
app
  .listen(port, () => {
    console.log(`Server is live at http://localhost:${port}`);
  })
  .on("error", (error) => console.log(error));
