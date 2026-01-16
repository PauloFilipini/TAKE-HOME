import { Router } from "express";
import { ConversationController } from "../conversation.controller";

const router = Router();
const controller = new ConversationController();

router.post("/conversations/completions", (req, res) =>
  controller.handle(req, res)
);

export default router;
