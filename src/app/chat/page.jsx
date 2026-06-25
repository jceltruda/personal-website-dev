'use client';

import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getMessageText } from '../../lib/chat-validation.js';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  const busy = status === 'submitted' || status === 'streaming';

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    sendMessage({ text });
    setInput('');
  };

  return (
    <main className="chat-page">
      <h1 className="chat-title">Ask about Joseph</h1>
      <p className="chat-subtitle">
        An AI assistant grounded in Joseph&apos;s background. Ask about his experience,
        projects, or skills.
      </p>

      <div className="chat-messages">
        {messages.length === 0 && (
          <p className="chat-empty">Try: &ldquo;What did Joseph do at TE Connectivity?&rdquo;</p>
        )}
        {messages.map((message) => (
          <div key={message.id} className={`chat-bubble chat-bubble-${message.role}`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {getMessageText(message)}
            </ReactMarkdown>
          </div>
        ))}
        {busy && <div className="chat-bubble chat-bubble-assistant chat-typing">…</div>}
        {error && (
          <div className="chat-error">Something went wrong. Please try again.</div>
        )}
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question…"
          maxLength={2000}
          aria-label="Your message"
        />
        <button className="chat-send" type="submit" disabled={busy || !input.trim()}>
          Send
        </button>
      </form>
    </main>
  );
}
