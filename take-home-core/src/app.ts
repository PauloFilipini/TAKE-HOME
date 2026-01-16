import express from "express";
import cors from "cors";
import conversationRoutes from "./api/routes/conversation.routes";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(conversationRoutes);

export default app;
