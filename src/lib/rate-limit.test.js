import { describe, it, expect, beforeEach } from 'vitest';
import { checkRateLimit, _resetRateLimitStore, RATE_LIMIT_MAX } from './rate-limit.js';

beforeEach(() => _resetRateLimitStore());

describe('checkRateLimit', () => {
  it('allows up to the max within a window', () => {
    const now = 1000;
    for (let i = 0; i < RATE_LIMIT_MAX; i++) {
      expect(checkRateLimit('ip-a', now).allowed).toBe(true);
    }
  });

  it('blocks once the max is exceeded in the same window', () => {
    const now = 1000;
    for (let i = 0; i < RATE_LIMIT_MAX; i++) checkRateLimit('ip-a', now);
    const result = checkRateLimit('ip-a', now);
    expect(result.allowed).toBe(false);
    expect(result.retryAfterSeconds).toBeGreaterThan(0);
  });

  it('tracks keys independently', () => {
    const now = 1000;
    for (let i = 0; i < RATE_LIMIT_MAX; i++) checkRateLimit('ip-a', now);
    expect(checkRateLimit('ip-b', now).allowed).toBe(true);
  });

  it('resets after the window elapses', () => {
    for (let i = 0; i < RATE_LIMIT_MAX; i++) checkRateLimit('ip-a', 1000);
    expect(checkRateLimit('ip-a', 1000).allowed).toBe(false);
    expect(checkRateLimit('ip-a', 1000 + 60000).allowed).toBe(true);
  });
});
