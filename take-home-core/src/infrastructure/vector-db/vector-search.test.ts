import "dotenv/config";
import { OpenAIEmbeddingService } from "../openai/OpenAIEmbeddingService";
import { VectorSearchService } from "./VectorSearchService";

(async () => {
  const embeddingService = new OpenAIEmbeddingService();
  const vectorSearch = new VectorSearchService();

  const question =
    "How long does a Tesla battery last before it needs replacement?";

  const embedding = await embeddingService.createEmbedding(question);

  const result = await vectorSearch.search(embedding, "tesla_motors");
})();
