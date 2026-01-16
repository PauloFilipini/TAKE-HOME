import { openAIClient } from "./OpenAIClient";

export class OpenAIEmbeddingService {
  async createEmbedding(text: string): Promise<number[]> {
    const response = await openAIClient.embeddings.create({
      model: "text-embedding-3-large",
      input: text,
    });

    return response.data[0].embedding;
  }
}
