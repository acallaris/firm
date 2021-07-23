export enum Opcode {
  HLT,
  IGL
}

interface Instruction {
  opcode: Opcode
}

export default class implements Instruction {
  public opcode: Opcode;

  constructor(opcode: Opcode) {
    this.opcode = opcode;
  }
}

export function opcodeFrom(v: number): Opcode {
  if (v in Opcode) {
    return v as Opcode;
  }

  return Opcode.IGL;
}