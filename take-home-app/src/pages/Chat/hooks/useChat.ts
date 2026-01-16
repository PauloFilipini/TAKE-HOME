import { useState } from "react";
import type {
  ConversationMessage,
  ConversationResponse,
} from "../../../types/chatTypes";
import { ChatService } from "../../../services/Chat/ChatService";

interface UseChatParams {
  helpdeskId: number;
  projectName: string;
}

export const useChat = ({ helpdeskId, projectName }: UseChatParams) => {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [handoverToHumanNeeded, setHandoverToHumanNeeded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: ConversationMessage = {
      role: "USER",
      content: text,
    };

    setLoading(true);
    setError(null);

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response: ConversationResponse = await ChatService.send({
        helpdeskId,
        projectName,
        messages: [...messages, userMessage],
      });

      setMessages(response.messages ?? []);
      setHandoverToHumanNeeded(response.handoverToHumanNeeded);
    } catch  {
      setError("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setHandoverToHumanNeeded(false);
    setError(null);
  };

  return {
    messages,
    loading,
    error,
    handoverToHumanNeeded,
    sendMessage,
    resetChat,
  };
};
