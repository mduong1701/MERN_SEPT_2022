const express = require('express')
const app = express()
const PORT = 1337;

app.get("/api", (requestObj, responseObj) => {
    console.log(requestObj);
    responseObj.send("hello from server.js")
})

app.get("/api/hello", (req, res) => {
    res.json({
        status: "ok",
        message: true,
        code: 200,
        other: "you're cool"
    })
})

app.listen(PORT, () => console.log(`Server is up on PORT ${PORT} and is listening for REQuests to RESpond to`))