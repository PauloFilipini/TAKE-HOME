import { Request, Response } from "express";
import { ConversationUseCase } from "../application/conversation.usecase";

export class ConversationController {
  private useCase: ConversationUseCase;

  constructor() {
    this.useCase = new ConversationUseCase();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const result = await this.useCase.execute(req.body);

      return res.status(200).json(result);
    } catch (error: any) {
      console.error("ConversationController error:", error);

      return res.status(500).json({
        message: "Internal server error",
      });
    }
  }
}
