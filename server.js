const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});

io.on("connection", (socket) => {
    console.log("Un utilisateur s'est connecté");

    socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg); // Envoie à tous les utilisateurs
    });

    socket.on("disconnect", () => {
        console.log("Un utilisateur s'est déconnecté");
    });
});

server.listen(3000, () => {
    console.log("Serveur en ligne sur http://localhost:3000");
});