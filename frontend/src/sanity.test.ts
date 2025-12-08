import { describe, it, expect } from 'vitest';

describe('Sanity Check', () => {
    it('window and document should exist', () => {
        expect(typeof window).not.toBe('undefined');
        expect(typeof document).not.toBe('undefined');
    });
});
