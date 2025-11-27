// src/context/ChatProvider.tsx
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode
} from 'react';
import type { ChatSession, Message } from '@/types/chat';
import { MODELS, DEFAULT_MODEL_ID } from '@/config/models';
import { loadHistory, saveHistory } from '@/lib/storage';
import { generateAiReply } from '@/lib/aiClient';

interface ChatContextValue {
  sessions: ChatSession[];
  activeSession?: ChatSession;
  currentModelId: string;
  sending: boolean;
  sendMessage: (content: string) => Promise<void>;
  newSession: () => void;
  switchSession: (id: string) => void;
  switchModel: (modelId: string) => void;
}

const ChatContext = createContext<ChatContextValue | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [sessions, setSessions] = useState<ChatSession[]>(() => loadHistory());
  const [activeId, setActiveId] = useState<string | undefined>(
    () => sessions[0]?.id
  );
  const [currentModelId, setCurrentModelId] = useState(DEFAULT_MODEL_ID);
  const [sending, setSending] = useState(false);

  const activeSession = useMemo(
    () => sessions.find(s => s.id === activeId),
    [sessions, activeId]
  );

  const persist = (next: ChatSession[]) => {
    setSessions(next);
    saveHistory(next);
  };

  function updateSession(updated: ChatSession) {
    persist(sessions.map(s => (s.id === updated.id ? updated : s)));
  }

  async function sendMessage(content: string) {
    if (!activeSession || !content.trim()) return;

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: content.trim(),
      createdAt: new Date().toISOString()
    };

    const model = MODELS.find(m => m.id === currentModelId) ?? MODELS[0];

    let sessionDraft: ChatSession = {
      ...activeSession,
      modelId: model.id,
      messages: [...activeSession.messages, userMsg],
      updatedAt: new Date().toISOString()
    };

    updateSession(sessionDraft);

    setSending(true);
    try {
      const ai = await generateAiReply(sessionDraft.messages, model);
      const botMsg: Message = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: ai.text,
        createdAt: new Date().toISOString()
      };

      sessionDraft = {
        ...sessionDraft,
        messages: [...sessionDraft.messages, botMsg],
        updatedAt: new Date().toISOString()
      };
      updateSession(sessionDraft);
    } catch (err) {
      console.error(err);
      // TODO: bisa tambah toast error di sini
    } finally {
      setSending(false);
    }
  }

  function newSession() {
    const now = new Date().toISOString();
    const session: ChatSession = {
      id: crypto.randomUUID(),
      title: 'Obrolan baru',
      modelId: currentModelId,
      messages: [],
      createdAt: now,
      updatedAt: now
    };
    const next = [session, ...sessions];
    persist(next);
    setActiveId(session.id);
  }

  function switchSession(id: string) {
    setActiveId(id);
  }

  function switchModel(modelId: string) {
    setCurrentModelId(modelId);
  }

  return (
    <ChatContext.Provider
      value={{
        sessions,
        activeSession,
        currentModelId,
        sending,
        sendMessage,
        newSession,
        switchSession,
        switchModel
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatContext must be used within ChatProvider');
  return ctx;
}
