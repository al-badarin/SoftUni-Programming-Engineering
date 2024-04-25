"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((cloth) => cloth.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        if (this.clothes.length === 0) {
            return {};
        }
        if (this.clothes.length === 1) {
            return this.clothes[0];
        }
        const smallestCloth = this.clothes.sort((a, b) => a.size - b.size)[0];
        return smallestCloth;
    }
    getCloth(color) {
        return this.clothes.find((cloth) => cloth.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        const sortedClothes = this.clothes.slice().sort((a, b) => a.size - b.size);
        const reportString = sortedClothes
            .map((cloth) => cloth.toString())
            .join("\n");
        return `${this.type} magazine contains:\n${reportString}`;
    }
}
exports.Magazine = Magazine;
