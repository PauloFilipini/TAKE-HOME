import { Box, Paper, Typography } from "@mui/material";
import type { ConversationMessage } from "../../../types/chatTypes";

interface Props {
  message: ConversationMessage;
}

const ChatMessageItem = ({ message }: Props) => {
  const isUser = message.role === "USER";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 1.5,
      }}
    >
      <Paper
        sx={{
          p: 1.5,
          maxWidth: "75%",
          backgroundColor: isUser ? "#1976d2" : "#e0e0e0",
          color: isUser ? "#fff" : "#000",
        }}
      >
        <Typography variant="body2">{message.content}</Typography>
      </Paper>
    </Box>
  );
};

export default ChatMessageItem;
