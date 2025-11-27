// src/lib/aiClient.ts
import type { Message, ModelConfig } from '@/types/chat';

const DEFAULT_API_URL =
  'https://api.nekolabs.web.id/cloudflare-ai/text-generation/chat';

const API_URL = import.meta.env.VITE_NEKOLABS_API_URL || DEFAULT_API_URL;

export interface AiResponse {
  text: string;
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
}

// helper: kalau VITE_USE_MOCK=1 kita balas dummy (buat dev/offline)
function mockReply(lastUser: string): AiResponse {
  return {
    text: `AI: (mock) kamu barusan bilang: "${lastUser.slice(0, 80)}"...`,
    totalTokens: 0
  };
}

export async function generateAiReply(
  messages: Message[],
  model: ModelConfig
): Promise<AiResponse> {
  const lastUser = [...messages].reverse().find(m => m.role === 'user');

  if (import.meta.env.VITE_USE_MOCK === '1' || !API_URL) {
    return mockReply(lastUser?.content ?? '');
  }

  // TODO: SESUAIKAN PAYLOAD DENGAN DOKUMENTASI RESMI NEKOLABS
  const payload = {
    model: model.id,
    messages: messages.map(m => ({
      role: m.role,
      content: m.content
    })),
    options: {
      temperature: model.temperature,
      max_tokens: model.maxTokens
    }
  };

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Authorization': `Bearer ${import.meta.env.VITE_NEKOLABS_API_KEY}`
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = await res.json();

  // contoh response: { success, result: { response, usage } }
  if (!data.success) {
    throw new Error('API returned success = false');
  }

  const usage = data.result?.usage ?? {};

  return {
    text: data.result?.response ?? '',
    promptTokens: usage.prompt_tokens,
    completionTokens: usage.completion_tokens,
    totalTokens: usage.total_tokens
  };
}
