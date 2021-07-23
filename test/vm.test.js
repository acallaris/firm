import { VM } from '../src/deps.ts';

Deno.test('VM', () => {
  const vm = new VM();
  assert(vm.registers[0] === 0);

  const vm2 = new VM();
  const bytes = [0, 0, 0, 0];
  vm2.program = bytes;
  vm2.run();
  assert(vm2.pc === 1);

  const vm3 = new VM();
  const bytes2 = [200, 0, 0, 0];
  vm3.program = bytes2;
  vm3.run();
  assert(vm3.pc === 1);
});