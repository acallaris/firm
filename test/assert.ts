export function assert(condition: boolean | undefined, message?: string): void {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}