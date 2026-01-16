import { azureSearchClient } from "./AzureSearchClient";
import { IdsDocument } from "../../application/interfaces/IdsDocument";

export class VectorSearchService {
  async search(
    embedding: number[],
    projectName: string,
    topK = 3
  ): Promise<IdsDocument[]> {
    const response = await azureSearchClient.post(
      `/search?api-version=2023-11-01`,
      {
        count: true,
        select: "content,type",
        top: topK,
        filter: `projectName eq '${projectName}'`,
        vectorQueries: [
          {
            vector: embedding,
            k: topK,
            fields: "embeddings",
            kind: "vector",
          },
        ],
      }
    );

    return response.data.value.map((doc: any) => ({
      content: doc.content,
      type: doc.type,
      score: doc["@search.score"],
    }));
  }
}
