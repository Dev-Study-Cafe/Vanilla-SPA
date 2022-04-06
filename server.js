const express = require("express");
const path = require("path");

const app = express();

app.use("/src", express.static(path.resolve(__dirname, "client", "src")));

app.get("/*", (_, res) => {
    res.sendFile(path.resolve("client", "public/index.html"));
});

app.listen(3000, () => console.log('\x1b[47m%s\x1b[50', "Server running ..."));