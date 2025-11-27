// src/components/chat/ChatHome.tsx
import { Card } from '@/components/common/Card';

export function ChatHome() {
  return (
    <div className="flex h-full items-center justify-center px-4 py-6">
      <div className="max-w-xl w-full">
        <Card>
          <div className="p-6">
            <h1 className="text-xl sm:text-2xl font-semibold mb-2">
              Apa yang bisa saya bantu?
            </h1>
            <p className="text-sm text-[var(--text-soft)] mb-4">
              Tanyakan apa saja tentang coding, desain, atau ide proyekmu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-soft)]">
              <div className="rounded-xl bg-[var(--bg-soft)] px-3 py-2">
                • Buat struktur proyek React + Tailwind  
                • Bantu deploy ke Vercel
              </div>
              <div className="rounded-xl bg-[var(--bg-soft)] px-3 py-2">
                • Buat UI dashboard modern  
                • Rancang prompt AI kreatif
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
