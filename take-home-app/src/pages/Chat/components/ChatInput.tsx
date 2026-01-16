import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
  loading: boolean;
}

const TESLA_RED = "#E82127";

const ChatInput = ({ onSend, loading }: Props) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim() || loading) return;
    onSend(text);
    setText("");
  };

  return (
    <Box
      sx={{
        p: 2,
        borderTop: "1px solid #e0e0e0",
        display: "flex",
        gap: 1,
        bgcolor: "#fafafa",
      }}
    >
      <TextField
        fullWidth
        size="small"
        placeholder="Digite sua pergunta..."
        value={text}
        disabled={loading}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <Button
        variant="contained"
        disabled={loading}
        onClick={handleSend}
        sx={{
          bgcolor: TESLA_RED,
          "&:hover": {
            bgcolor: "#c61c21",
          },
        }}
      >
        Enviar
      </Button>
    </Box>
  );
};

export default ChatInput;
