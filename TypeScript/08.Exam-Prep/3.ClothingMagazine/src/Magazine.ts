import { Cloth } from "./Cloth";

export class Magazine {
  clothes: Cloth[];
  constructor(private type: string, private capacity: number) {
    this.type = type;
    this.capacity = capacity;
    this.clothes = [];
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
    if (this.clothes.length === 0) {
      return {} as Cloth;
    }

    if (this.clothes.length === 1) {
      return this.clothes[0];
    }

    const smallestCloth = this.clothes.sort((a, b) => a.size - b.size)[0];
    return smallestCloth;
  }

  getCloth(color: string): Cloth | undefined {
    return this.clothes.find((cloth) => cloth.color === color);
  }

  getClothCount(): number {
    return this.clothes.length;
  }

  report(): string {
    const sortedClothes = this.clothes.slice().sort((a, b) => a.size - b.size);
    const reportString = sortedClothes
      .map((cloth) => cloth.toString())
      .join("\n");
    return `${this.type} magazine contains:\n${reportString}`;
  }
}
