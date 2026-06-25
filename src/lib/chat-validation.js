export const MAX_MESSAGE_CHARS = 2000;
export const MAX_MESSAGES = 20;

export function getMessageText(message) {
  if (Array.isArray(message?.parts)) {
    return message.parts
      .filter((p) => p?.type === 'text' && typeof p.text === 'string')
      .map((p) => p.text)
      .join('');
  }
  return typeof message?.content === 'string' ? message.content : '';
}

export function validateChatRequest(body) {
  const messages = body?.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return { ok: false, status: 400, error: 'messages must be a non-empty array' };
  }

  for (const message of messages) {
    if (getMessageText(message).length > MAX_MESSAGE_CHARS) {
      return { ok: false, status: 400, error: 'message too long' };
    }
  }

  const last = messages[messages.length - 1];
  if (getMessageText(last).trim().length === 0) {
    return { ok: false, status: 400, error: 'last message is empty' };
  }

  const trimmed = messages.slice(-MAX_MESSAGES);
  return { ok: true, messages: trimmed };
}
