import { OpenAIChatService } from "../infrastructure/openai/OpenAIChatService";
import { OpenAIEmbeddingService } from "../infrastructure/openai/OpenAIEmbeddingService";
import { VectorSearchService } from "../infrastructure/vector-db/VectorSearchService";
import {IConversationRequest, IConversationResponse} from "./interfaces/conversation";



export class ConversationUseCase {
  constructor(
    private readonly embeddingService = new OpenAIEmbeddingService(),
    private readonly vectorSearchService = new VectorSearchService(),
    private readonly chatService = new OpenAIChatService()
  ) {}

  async execute(request: IConversationRequest): Promise<IConversationResponse> {
  const userMessages = request.messages.filter(
  (m) => m.role === "USER"
);

const lastUserMessage =
  userMessages[userMessages.length - 1];
;

    if (!lastUserMessage) {
      throw new Error("No user message found");
    }

    // 1️⃣ Create embedding
    const embedding = await this.embeddingService.createEmbedding(
      lastUserMessage.content
    );

    // 2️⃣ Vector search (IDS)
    const idsDocuments = await this.vectorSearchService.search(
      embedding,
      request.projectName
    );

    // 3️⃣ Generate AI answer (RAG)
    const chatResult = await this.chatService.generateAnswer(
      lastUserMessage.content,
      idsDocuments
    );

    return {
      messages: [
        ...request.messages,
        {
          role: "AGENT",
          content: chatResult.answer,
        },
      ],
      handoverToHumanNeeded: chatResult.handoverToHumanNeeded,
      sectionsRetrieved: idsDocuments,
    };
  }
}
