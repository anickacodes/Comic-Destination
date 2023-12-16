const express = require("express");
const app = express();

const PORT = process.env.PORT || 1100;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, MERN activated 🦾🦿");
});

app.listen(PORT, () => {
  console.log(`Server listening on prort ${PORT}`);
});
