import { assert } from './assert.ts';

Deno.test('assert', () => {
  assert(typeof assert === 'function');
});