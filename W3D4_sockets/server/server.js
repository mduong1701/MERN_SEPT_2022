const express = require("express")
const app = express();
const PORT = 8000;

const server = app.listen(PORT, () => console.log(`server up on ${PORT}`))

// to use socket we have to pass it our server as a param
const io = require("socket.io")(server, {cors:true})

// different types of socket calls

// emitters - "I have this thing!" 
// on - trigger - for listening for a particular even

// at this point the server is listening of a 'connection'
io.on("connection", (socket) => {
    console.log("connected client", socket.id);

    // listen for the chat client
    socket.on("yo chat", (dataFromClient) => {
        console.log(dataFromClient);

        // send it over to everyone connected
        io.emit("post chat", dataFromClient)
    })

    // different event
    // socket.on("on route change")

})
