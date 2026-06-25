export const RATE_LIMIT_MAX = 15;
export const RATE_LIMIT_WINDOW_MS = 60000;

const store = new Map(); // key -> { windowStart, count }

export function checkRateLimit(key, now = Date.now()) {
  const entry = store.get(key);

  if (!entry || now - entry.windowStart >= RATE_LIMIT_WINDOW_MS) {
    store.set(key, { windowStart: now, count: 1 });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (entry.count < RATE_LIMIT_MAX) {
    entry.count += 1;
    return { allowed: true, retryAfterSeconds: 0 };
  }

  const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - entry.windowStart);
  return { allowed: false, retryAfterSeconds: Math.ceil(retryAfterMs / 1000) };
}

export function _resetRateLimitStore() {
  store.clear();
}
