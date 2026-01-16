import { Box, Typography, CircularProgress } from "@mui/material";
import type { ConversationMessage } from "../../../types/chatTypes";

interface ChatMessagesProps {
  messages: ConversationMessage[];
  loading?: boolean;
}

const TESLA_RED = "#E82127";

const ChatMessages = ({ messages, loading }: ChatMessagesProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        bgcolor: "#f5f5f5", // fundo neutro
      }}
    >
      {messages.map((msg, index) => {
        const isUser = msg.role === "USER";

        return (
          <Box
            key={index}
            sx={{
              alignSelf: isUser ? "flex-end" : "flex-start",
              maxWidth: "70%",
              p: 1.5,
              borderRadius: 2,
              bgcolor: "white",
              boxShadow: 1,
              borderLeft: isUser ? `4px solid ${TESLA_RED}` : "none",
            }}
          >
            <Typography variant="body2">{msg.content}</Typography>
          </Box>
        );
      })}

      {/* Typing indicator */}
      {loading && (
        <Box
          sx={{
            alignSelf: "flex-start",
            maxWidth: "70%",
            p: 1.5,
            borderRadius: 2,
            bgcolor: "white",
            boxShadow: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CircularProgress size={14} sx={{ color: TESLA_RED }} />
          <Typography variant="body2">...</Typography>
        </Box>
      )}
    </Box>
  );
};

export default ChatMessages;
