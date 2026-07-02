'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import { ArrowUp, RotateCcw, Square } from 'lucide-react';
import { getMessageText } from '../../lib/chat-validation.js';

const SUGGESTIONS = [
  { label: 'His time at TE Connectivity', prompt: 'What did Joseph do at TE Connectivity?' },
  { label: 'Strongest skills', prompt: 'What are his strongest skills?' },
  { label: 'A project he built', prompt: 'Tell me about a project he built.' },
  { label: 'His research at RPI', prompt: 'What is Joseph researching at RPI?' },
];

const PROMPTS = SUGGESTIONS.map((s) => s.prompt);

// Types a suggestion out character by character, holds, deletes it, then
// advances to the next — an animated "ghost" prompt living in the input's
// placeholder. Returns the current fragment and the full word it's targeting
// so it can be accepted with Tab/Enter.
function useTypewriter(words, active) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!active) return undefined;
    const word = words[index % words.length];
    const atFull = !deleting && text === word;
    const atEmpty = deleting && text === '';

    // Every transition runs inside the timeout (never synchronously in the
    // effect body): pause when fully typed, advance when fully deleted,
    // otherwise add/remove a character.
    const delay = atFull ? 1800 : atEmpty ? 400 : deleting ? 35 : 55;
    const id = setTimeout(() => {
      if (atFull) {
        setDeleting(true);
      } else if (atEmpty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((t) =>
          deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, index, active, words]);

  return { fragment: text, word: words[index % words.length] };
}

function AssistantAvatar() {
  return (
    <Image
      src="/headshot-cropped.jpg"
      alt=""
      aria-hidden="true"
      className="chat-avatar"
      width={28}
      height={28}
    />
  );
}

export default function ChatPage() {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const endRef = useRef(null);
  // Whether the view should stay pinned to the newest message. Cleared when
  // the user scrolls up to read history, restored when they return to the end.
  const stickRef = useRef(true);
  const { messages, sendMessage, status, error, stop, regenerate } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  // Focus the composer on load so Tab immediately accepts the ghost suggestion
  // rather than walking through the nav links first.
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const busy = status === 'submitted' || status === 'streaming';
  const thinking = status === 'submitted';
  const isEmpty = messages.length === 0;

  useEffect(() => {
    const onScroll = () => {
      stickRef.current =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Follow the conversation as messages stream in, but never fight a user
  // who has scrolled up to re-read something.
  useEffect(() => {
    if (!stickRef.current) return;
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, thinking]);

  // Only animate the ghost prompt on the empty landing screen while the field
  // is untouched.
  const typing = useTypewriter(PROMPTS, isEmpty && input === '');
  // Ghost-typed suggestions only on the empty landing screen; once the
  // conversation starts, a plain follow-up prompt.
  const placeholder = isEmpty ? `${typing.fragment}▏` : 'Ask a follow-up…';

  // Grow the composer with its content (up to ~4 lines), shrink when cleared.
  // Depends on `placeholder` too: the ghost prompt renders in the content box,
  // so on narrow screens the field must grow as the ghost wraps to a second
  // line (scrollHeight includes wrapped placeholder text).
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const capped = el.scrollHeight > 160;
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
    // Only allow scrolling once real content exceeds the cap, so a wrapped
    // ghost placeholder never surfaces a scrollbar.
    el.style.overflowY = capped ? 'auto' : 'hidden';
  }, [input, placeholder]);

  const submit = (text) => {
    const trimmed = text.trim();
    if (!trimmed || busy) return;
    stickRef.current = true;
    sendMessage({ text: trimmed });
    setInput('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Empty field + a ghost suggestion showing → accept it instead of sending,
    // so the user can review or edit before a second Enter fires it off.
    if (!input.trim()) {
      if (isEmpty && typing.word) setInput(typing.word);
      return;
    }
    submit(input);
  };

  const handleKeyDown = (e) => {
    // Tab accepts the currently-typed ghost suggestion when the field is empty.
    if (e.key === 'Tab' && !e.shiftKey && input === '' && isEmpty && typing.word) {
      e.preventDefault();
      setInput(typing.word);
      return;
    }
    // Enter sends; Shift+Enter inserts a newline.
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <main className={`chat-page${isEmpty ? '' : ' chat-page--active'}`}>
      <div className="chat-glow" aria-hidden="true" />

      {isEmpty ? (
        <div className="chat-hero">
          <h1 className="chat-hero-title">
            What do you want to know about Joseph?
          </h1>
          <p className="chat-hero-sub">
            An AI assistant grounded in his experience, projects, and research.
          </p>
        </div>
      ) : (
        <div className="chat-messages" aria-live="polite">
          {messages.map((message) => (
            <div key={message.id} className={`chat-row chat-row-${message.role}`}>
              {message.role === 'assistant' && <AssistantAvatar />}
              <div className={`chat-bubble chat-bubble-${message.role}`}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {getMessageText(message)}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {thinking && (
            <div className="chat-row chat-row-assistant">
              <AssistantAvatar />
              <div
                className="chat-bubble chat-bubble-assistant chat-typing"
                aria-label="Assistant is typing"
              >
                <span className="chat-dot" />
                <span className="chat-dot" />
                <span className="chat-dot" />
              </div>
            </div>
          )}
          {error && (
            <div className="chat-row chat-row-assistant">
              <div className="chat-error-card" role="alert">
                <span>Something went wrong.</span>
                <button
                  type="button"
                  className="chat-retry"
                  onClick={() => regenerate()}
                >
                  <RotateCcw size={13} aria-hidden="true" />
                  Try again
                </button>
              </div>
            </div>
          )}
          <div ref={endRef} aria-hidden="true" />
        </div>
      )}

      <form className="chat-composer" onSubmit={handleSubmit}>
        <textarea
          ref={inputRef}
          rows={1}
          className={`chat-input${isEmpty && input === '' ? ' chat-input--ghost' : ''}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          maxLength={2000}
          aria-label="Your message"
        />
        {busy ? (
          <button
            type="button"
            className="chat-send"
            onClick={() => stop()}
            aria-label="Stop generating"
          >
            <Square size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          </button>
        ) : (
          <button
            className="chat-send"
            type="submit"
            disabled={!input.trim() && !(isEmpty && typing.word)}
            aria-label="Send message"
          >
            <ArrowUp size={18} strokeWidth={2.5} aria-hidden="true" />
          </button>
        )}
      </form>

      {isEmpty && (
        <div className="chat-suggestions">
          {SUGGESTIONS.map((s, i) => (
            <button
              key={s.prompt}
              type="button"
              className="chat-chip"
              style={{ animationDelay: `${0.2 + i * 0.07}s` }}
              onClick={() => submit(s.prompt)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
