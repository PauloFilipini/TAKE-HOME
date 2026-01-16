import axios from "axios";

export const azureSearchClient = axios.create({
  baseURL: `${process.env.AZURE_SEARCH_ENDPOINT}/indexes/${process.env.AZURE_SEARCH_INDEX}/docs`,
  headers: {
    "Content-Type": "application/json",
    "api-key": process.env.VECTOR_DB_KEY as string,
  },
});
