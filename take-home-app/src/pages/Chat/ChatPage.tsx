import { Box, Container, Paper, Typography, Alert } from "@mui/material";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import { useChat } from "./hooks/useChat";

const ChatPage = () => {
  const projectName = import.meta.env.VITE_PROJECT_NAME
  const {
    messages,
    loading,
    error,
    sendMessage,
    handoverToHumanNeeded,
  } = useChat({
    helpdeskId: Number(import.meta.env.VITE_HELPDESK_ID),
    projectName,
  });

  return (
    <Container maxWidth="md" sx={{ height: "100vh", py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            p: 2,
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <Typography variant="h6">Support {projectName}</Typography>
        </Box>

        {handoverToHumanNeeded && (
          <Alert severity="warning" sx={{ mx: 2, mt: 2 }}>
            Sua conversa será direcionada para um atendente humano.
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mx: 2, mt: 2 }}>
            {error}
          </Alert>
        )}

        <ChatMessages messages={messages} loading={loading}/>

        <ChatInput onSend={sendMessage} loading={loading} />
      </Paper>
    </Container>
  );
};

export default ChatPage;
