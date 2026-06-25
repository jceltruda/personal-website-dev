import { describe, it, expect } from 'vitest';
import { SYSTEM_PROMPT } from './assistant-prompt.js';

describe('SYSTEM_PROMPT', () => {
  it('is a non-trivial string', () => {
    expect(typeof SYSTEM_PROMPT).toBe('string');
    expect(SYSTEM_PROMPT.length).toBeGreaterThan(200);
  });

  it('includes key grounding facts', () => {
    expect(SYSTEM_PROMPT).toContain('Joseph Celtruda');
    expect(SYSTEM_PROMPT).toContain('Rensselaer Polytechnic Institute');
  });
});
