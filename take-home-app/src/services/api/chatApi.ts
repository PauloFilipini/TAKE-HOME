import type { ConversationResponse, ConversationRequest } from "../../types/chatTypes";
import { api } from "./baseApi";


export const chatApi = {
  sendMessage: async (
    payload: ConversationRequest
  ): Promise<ConversationResponse> => {
    const { data } = await api.post<ConversationResponse>(
      "/conversations/completions",
      payload
    );
    return data;
  },
};
