import http from "http";

http
  .createServer((req, res) => {
    let data = "";
    req.on("readable", () => {
      console.log(req.read());
    });
    req.on("data", chunk => {
      data += chunk;
      console.log(3);
    });

    req.on("end", () => {
      console.log(33);
      res.write(data);
      res;
    });
  })
  .listen(8080);
