import { Cloth } from "./Cloth";

export class Magazine {
  constructor(
    private clothes: Cloth[],
    private type: string,
    private capacity: number
  ) {
    this.type = type;
    this.capacity = capacity;
  }
}
