import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); // this will have absolute path of root folder (05-chat-app)

dotenv.config();
app.use(express.json()); // to parse incoming request with JSON payloads (from req.body)
app.use(cookieParser()); //to parse the incoming cookies from req.cookies
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on http://localhost:${PORT}`);
});


// "npm install && npm install --prefix frontend && npm run build --prefix frontend" 
// means npm install and npm install cd frontend and cd frontend npm run build