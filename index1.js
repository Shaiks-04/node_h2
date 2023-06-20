const http = require('http');
const express = require("express");
const route = require('./Routers/route');
const app = express();
app.use(route);

const Port = 3000;
const server = http.createServer(app);
server.listen(Port, () => {
    try {
        console.log(`server is running on port no.${Port}`);
    }
    catch (err) {
        console.log(err);
    }
});
