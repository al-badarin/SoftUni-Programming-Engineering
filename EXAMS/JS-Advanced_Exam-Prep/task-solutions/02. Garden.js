class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        spaceRequired = Number(spaceRequired);

        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.plants.push({
                plantName,
                spaceRequired,
                ripe: false,
                quantity: 0,
            });

            this.spaceAvailable = this.spaceAvailable - spaceRequired;

            // if(this.plants.some(x=>x.plantName !== plantName)){
            // }
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        quantity = Number(quantity);

        let searchedPlant = this.plants.find(x => x.plantName === plantName);

        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (searchedPlant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        } else {
            searchedPlant.ripe = true;
            searchedPlant.quantity += quantity;

            if (quantity === 1) {
                return `${searchedPlant.quantity} ${plantName} has successfully ripened.`
            } else {
                return `${searchedPlant.quantity} ${plantName}s have successfully ripened.`
            }
        }
    }

    harvestPlant(plantName) {
        let searchedPlant = this.plants.find(x => x.plantName === plantName);

        if (!searchedPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        let plantIndex = this.plants.findIndex(x => x.plantName === plantName);

        if (searchedPlant.ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        } else {
            this.storage.push({ plantName: searchedPlant.plantName, quantity: searchedPlant.quantity });
            this.plants.splice(plantIndex, 1);
            // this.storage -= searchedPlant.quantity;
            return `The ${plantName} has been successfully harvested.`
        }
    }

    generateReport() {
        let result = [];

        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        let sortedPlants = [];

        this.plants
            .sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(x => {
                sortedPlants.push(`${x.plantName}`);
            });

        result.push(`Plants in the garden: ` + sortedPlants.join(', '));

        if (this.storage.length === 0) {
            result.push("Plants in storage: The storage is empty.");
        } else {
            let sorted = [];
            this.plants
                .forEach(x => {
                    sorted.push(`${x.plantName} (${x.quantity})`);
                });
            result.push(`Plants in storage: ` + sorted.join(', '))
        }

        return result.join('\n');
    }
}


//EXPECTED:
// The garden has 220 free space left.
// Plants in the garden: apple, raspberry
// Plants in storage: orange (1)

//MINE:
// The garden has 20 free space left.
// Plants in the garden: apple
// Plants in the garden: raspberry
// Plants in storage: apple (10)
// Plants in storage: raspberry (0)


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
