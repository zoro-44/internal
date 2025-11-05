const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/register", (req, res) => {
  const { name, email, phone, workshop } = req.body;
  console.log(`New Registration:
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Workshop: ${workshop}`);
  res.send("<h3>✅ Registration Successful!</h3>");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
