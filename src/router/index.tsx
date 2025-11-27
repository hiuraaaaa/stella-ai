// src/router/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layout/RootLayout';
import { ChatPage } from '@/pages/ChatPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ChatPage />
      }
    ]
  }
]);
