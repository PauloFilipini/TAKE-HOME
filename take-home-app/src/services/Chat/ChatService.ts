
import type { ConversationMessage, ConversationResponse } from "../../types/chatTypes";
import { chatApi } from "../api/chatApi";

interface SendChatParams {
  helpdeskId: number;
  projectName: string;
  messages: ConversationMessage[];
}

export const ChatService = {
  send: async (
    params: SendChatParams
  ): Promise<ConversationResponse> => {
    return chatApi.sendMessage({
      helpdeskId: params.helpdeskId,
      projectName: params.projectName,
      messages: params.messages,
    });
  },
};
