export class Cloth {
  constructor(
    private color: string,
    private size: number,
    private type: string
  ) {
    this.color = color;
    this.size = size;
    this.type = type;
  }

  toString(): string {
    return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
  }
}
