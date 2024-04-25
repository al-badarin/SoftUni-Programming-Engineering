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
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    const index = this.clothes.findIndex((cloth) => cloth.color === color);
    if (index !== -1) {
      this.clothes.splice(index, 1);
      return true;
    }
    return false;
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
