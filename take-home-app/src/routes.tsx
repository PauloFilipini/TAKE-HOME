import { useRoutes, Navigate } from "react-router-dom";
import ChatPage from "./pages/Chat/ChatPage";

export const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/chat" replace />,
    },
    {
      path: "/chat",
      element: <ChatPage />,
    },
  ]);
};
