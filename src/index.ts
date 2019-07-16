import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("dd");
  res.end();
}).listen(8080);

// server.on("connection", (socket) => {
//   socket.setTimeout(200);
// });

server.on("clientError", (err, socket) => {
  socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
});