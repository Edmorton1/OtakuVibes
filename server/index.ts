import express from "express";
import dotenv from "dotenv";
import router from "@s/router";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import WebSocket from "ws";
import createWebSocketServer from "@s/webSocket";

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = createWebSocketServer(server)

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

const PORT = process.env.PORT ?? 3000;

app.use("/api", router);

server.listen(PORT, () => {
  console.log(`СЕРВЕР ЗАПУШЕН НА ПОРТУ ${PORT}...`);
});

export { wss }