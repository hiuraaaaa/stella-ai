// src/config/models.ts
import type { ModelConfig } from '@/types/chat';

export const MODELS: ModelConfig[] = [
  {
    id: 'stella-smart',
    label: 'Stella • Smart',
    description: 'Respons cepat dan cukup mendalam.',
    temperature: 0.7,
    maxTokens: 1024
  },
  {
    id: 'stella-deep',
    label: 'Stella • Deep',
    description: 'Jawaban lebih panjang dan analitis.',
    temperature: 0.4,
    maxTokens: 2048
  }
];

export const DEFAULT_MODEL_ID = MODELS[0].id;
