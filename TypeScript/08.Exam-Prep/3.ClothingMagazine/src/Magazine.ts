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

  addCloth(cloth: Cloth): void {
    //
  }

  removeCloth(color: string): boolean {
    //
    return true;
  }

  getSmallestCloth(): Cloth {
    //
  }

  getCloth(color: string): Cloth {
    //
  }

  getClothCount(): number {
    //
    return 2;
  }

  report(): string {
    //
    return ``;
  }
}
