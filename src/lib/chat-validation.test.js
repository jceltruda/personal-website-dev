import { describe, it, expect } from 'vitest';
import { getMessageText, validateChatRequest, MAX_MESSAGES } from './chat-validation.js';

const userMsg = (text) => ({ role: 'user', parts: [{ type: 'text', text }] });

describe('getMessageText', () => {
  it('joins text parts', () => {
    const msg = { role: 'user', parts: [{ type: 'text', text: 'a' }, { type: 'text', text: 'b' }] };
    expect(getMessageText(msg)).toBe('ab');
  });

  it('falls back to content when parts missing', () => {
    expect(getMessageText({ role: 'user', content: 'hi' })).toBe('hi');
  });
});

describe('validateChatRequest', () => {
  it('rejects a non-array messages field', () => {
    const r = validateChatRequest({ messages: 'nope' });
    expect(r.ok).toBe(false);
    expect(r.status).toBe(400);
  });

  it('rejects an empty messages array', () => {
    const r = validateChatRequest({ messages: [] });
    expect(r.ok).toBe(false);
    expect(r.status).toBe(400);
  });

  it('rejects an empty last message', () => {
    const r = validateChatRequest({ messages: [userMsg('   ')] });
    expect(r.ok).toBe(false);
    expect(r.status).toBe(400);
  });

  it('rejects an over-length message', () => {
    const r = validateChatRequest({ messages: [userMsg('x'.repeat(2001))] });
    expect(r.ok).toBe(false);
    expect(r.status).toBe(400);
  });

  it('accepts a valid request', () => {
    const r = validateChatRequest({ messages: [userMsg('hello')] });
    expect(r.ok).toBe(true);
    expect(r.messages).toHaveLength(1);
  });

  it('trims to the last MAX_MESSAGES messages', () => {
    const many = Array.from({ length: MAX_MESSAGES + 5 }, (_, i) => userMsg(`m${i}`));
    const r = validateChatRequest({ messages: many });
    expect(r.ok).toBe(true);
    expect(r.messages).toHaveLength(MAX_MESSAGES);
    expect(getMessageText(r.messages[0])).toBe('m5');
  });
});
