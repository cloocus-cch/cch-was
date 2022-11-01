"use strict";

const app = require("../app");
const port = 8080;

app.listen(port, function() {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});