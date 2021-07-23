import { Opcode, opcodeFrom } from '../deps.ts';

interface VM {
  registers: number[];
  pc: number;
  program: number[];
}

export default class implements VM {
  public registers: number[];
  public pc: number;
  public program: number[];

  constructor() {
    this.registers = Array(32).fill(0);
    this.pc = 0;
    this.program = [];
  }

  public run(): void {
    while (true) {
      if (this.pc >= this.program.length) break;
      switch (this.decodeOpcode()) {
        case Opcode.HLT: return console.log('Found HLT');
        default: return console.log('Unrecognized opcode found! Terminating!');
      }
    }
  }

  private decodeOpcode(): Opcode {
    const opcode = opcodeFrom(this.program[this.pc]);
    this.pc += 1;
    return opcode;
  }
}