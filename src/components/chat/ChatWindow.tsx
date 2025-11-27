// src/components/chat/ChatWindow.tsx
import { useChatContext } from '@/context/ChatProvider';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

export function ChatWindow() {
  const { activeSession, sendMessage, sending } = useChatContext();

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1">
        <MessageList messages={activeSession?.messages ?? []} />
      </div>
      <MessageInput onSend={sendMessage} disabled={sending} />
    </div>
  );
}
