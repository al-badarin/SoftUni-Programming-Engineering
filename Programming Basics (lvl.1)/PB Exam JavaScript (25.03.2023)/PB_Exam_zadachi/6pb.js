function solve(input) {
    let locationsCount = Number(input.shift());
    let locations = [];
   
    for (let i = 0; i < locationsCount; i++) {
      let expectedGoldPerDay = Number(input.shift());
      let days = Number(input.shift());
   
      let gold = 0;
      for (let j = 0; j < days; j++) {
        let dailyGold = Number(input.shift());
        gold += dailyGold;
      }
   
      let averageGoldPerDay = gold / days;
      locations.push({
        expectedGoldPerDay,
        averageGoldPerDay
      });
    }
   
    locations.forEach((location, index) => {
      let difference = location.expectedGoldPerDay - location.averageGoldPerDay;
      if (difference <= 0) {
        console.log(`Good job! Average gold per day: ${location.averageGoldPerDay.toFixed(2)}.`);
      } else {
        console.log(`You need ${difference.toFixed(2)} gold.`);
      }
    });
  }
  solve(["2",
  "10",
  "3",
  "10",
  "10",
  "11",
  "20",
  "2",
  "20",
  "10"])
  