import { Instruction, Opcode } from '../src/deps.ts';
import { assert } from './assert.ts';

Deno.test('Instruction', () => {
  const opcode = Opcode.HLT;
  assert(opcode === Opcode.HLT);

  const instruction = new Instruction(Opcode.HLT);
  assert(instruction.opcode === Opcode.HLT);
});