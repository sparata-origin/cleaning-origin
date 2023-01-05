const http = require("./app.js");
const port = 3000;

require("./socket.js");

http.listen(port, () => {
  console.log(port, '원조집 OPEN');
});