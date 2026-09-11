'use client';
import { useState } from 'react';
export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState('');
  return (
    <div>
      <button
        type="button"
        className="button button-secondary"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(email);
            setStatus('Email copied.');
          } catch {
            setStatus(`Copy this address: ${email}`);
          }
        }}
      >
        Copy email <span aria-hidden="true">⧉</span>
      </button>
      <output className="caption" aria-live="polite">
        {status}
      </output>
    </div>
  );
}
