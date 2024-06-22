class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        price = Number(price);

        let flight = this.flights.find(f => f.flightNumber == flightNumber);
        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } else {
            this.flights.push({
                flightNumber,
                destination,
                departureTime,
                price,
            });

            return `Flight ${flightNumber} to ${destination} has been added to the system.`;
        }
    }

    bookFlight(passengerName, flightNumber) {
        let flight = this.flights.find(f => f.flightNumber == flightNumber);

        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            // this.bookingsCount = this.bookingsCount + 1;

            // this.bookings.push({
            //     passengerName,
            //     flightNumber,
            // });

            flight.passengerName = passengerName;
            this.bookingsCount++;
            this.bookings.push(flight);

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        //let passenger = this.bookings.find(p => p.passengerName == passengerName);
        let flightNum = this.bookings.find(f => f.flightNumber == flightNumber);

        if (!flightNum) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        } else {
            let index = this.bookings.indexOf(flightNum);
            this.bookings.splice(index, 1);
            this.bookingsCount = this.bookingsCount--;

            //remove the booking from the bookings array
            //this.items = this.items.filter(obj => obj.itemSomething !== itemSomething); //TO REMOVE {} FROM THE []

            // this.bookings = this.bookings.filter(obj => obj.passengerName !== passenger);
            // this.bookings = this.bookings.filter(obj => obj.flightNumber !== flightNum);

            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        if (criteria === 'all') {
            let result = [];

            result.push(`All bookings(${this.bookingsCount}):`);
            this.bookings.map(e => result.push(`${e.passengerName} booked for flight ${e.flightNumber}.`));

            return result.join('\n');
        }

        else if (criteria === 'cheap') {
            if (this.flights.find(x => x.price > 100)) {
                return "No cheap bookings found.";
            } else {
                let result = [];

                result.push("Cheap bookings:");
                //this.bookings.map(e => result.push(`${e.passengerName} booked for flight ${e.flightNumber}.`));
                this.bookings.forEach((item) => {
                    if (item.price <= 100) {
                        result.push(`${item.passengerName} booked for flight ${item.flightNumber}.`)   
                    }
                })

                return result.join('\n');
            }
        }

        else if (criteria === 'expensive') {
            if (this.flights.find(x => x.price <= 100)) {
                return "No expensive bookings found."
            } else {
                let result = [];

                result.push("Expensive bookings:");
                // this.bookings.map(e => result.push(`${e.passengerName} booked for flight ${e.flightNumber}.`));
                    this.bookings.forEach((item) => {
                        if (item.price > 100) {
                            result.push(`${item.passengerName} booked for flight ${item.flightNumber}.`)    
                        }
                    })

                return result.join('\n');
            }
        } 
        // else {
        //     throw new Error(`No bookings have been made yet.`);
        // }
    }
}
const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));




