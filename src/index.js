import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
//----------------------------------------------
import router from "./router/router.js";
//----------------------------------------------
const app = express();

const port = 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: "http://localhost:3000/",
});

app.use(cors());

router(app);

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => console.log("you are in port " + port));
