import express from "express";
import Routes from "./routes";
const app = express();
const port = 3000;
Routes(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
