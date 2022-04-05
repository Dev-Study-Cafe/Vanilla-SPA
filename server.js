
const express = require("express");
const path = require("path");

// express 사용
const app = express();

app.use("/src", express.static(path.resolve(__dirname, "client", "src")));

app.get("/*", (_, res) => {
    res.sendFile(path.resolve("client", "public/index.html"));
});

// port 생성 서버 실행
app.listen(3000, () => console.log("Server running ...."));