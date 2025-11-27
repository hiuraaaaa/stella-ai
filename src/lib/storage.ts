// src/lib/storage.ts
import type { ChatSession } from '@/types/chat';

const HISTORY_KEY = 'ai-chat-ui:history';

export function loadHistory(): ChatSession[] {
  const raw = localStorage.getItem(HISTORY_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as ChatSession[];
  } catch {
    return [];
  }
}

export function saveHistory(sessions: ChatSession[]) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(sessions));
}
