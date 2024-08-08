import * as http from "node:http";
import * as fs from "node:fs/promises";

const PAGES = ["./index", "./about", "./contact-me"];

http
  .createServer(async (req, res) => {
    let fileName = "." + (req.url === "/" ? "/index" : req.url);

    if (PAGES.includes(fileName)) fileName += ".html";
    let data = null;
    try {
      data = await fs.readFile(fileName);
    } catch {
      data = await fs.readFile("./404.html");
      res.statusCode = 404;
    }
    res.write(data);
    res.end();
  })
  .listen(8000);
