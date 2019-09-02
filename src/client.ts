import http, { Agent } from "http";

const agent = new Agent({
  keepAlive: true,
  // timeout: 20000
});


const re = () => {
  console.log(123);
  const request = http.request({
    agent,
    host: "10.16.18.133",
    port: 8080,
    path: "/abc",
    method: "POST",
  });

  request.on("error", (err) => {
    console.log(err);
  });

  request.on("finish", () => {
    re();
  });

  request.setHeader("content-type", "text/plain");
  request.end("ddd");
};

re();
// setInterval(re, 100);