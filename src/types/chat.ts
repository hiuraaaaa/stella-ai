// src/types/chat.ts
export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
}

export interface ChatSession {
  id: string;
  title: string;
  modelId: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

export interface ModelConfig {
  id: string;
  label: string;
  description?: string;
  temperature: number;
  maxTokens: number;
}
