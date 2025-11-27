// src/pages/ChatPage.tsx
import { useChatContext } from '../context/ChatProvider';
import { ChatHome } from '../components/chat/ChatHome';
import { ChatWindow } from '../components/chat/ChatWindow';

export function ChatPage() {
  const { activeSession } = useChatContext();

  if (!activeSession) {
    return <ChatHome />;
  }

  return (
    <div className="flex-1 flex">
      <ChatWindow />
    </div>
  );
}
