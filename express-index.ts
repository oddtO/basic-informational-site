import express from "express";
import fs from "fs";
const app = express();

const index = fs.readFileSync("./index.html");
const contactMe = fs.readFileSync("./contact-me.html");
const about = fs.readFileSync("./about.html");
const notFoundPage = fs.readFileSync("./404.html");

app.get("/", (req, res) => {
  res.write(index);
  res.end();
});

app.get("/contact-me", (req, res) => {
  res.write(contactMe);
  res.end();
});
app.get("/about", (req, res) => {
  res.write(about);
  res.end();
});

app.get("*", (req, res) => {
  res.write(notFoundPage);
  res.end();
});
app.listen(8000, () => console.log("started server"));
