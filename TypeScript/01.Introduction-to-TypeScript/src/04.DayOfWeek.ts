function dayOfWeek(day: string): void {
  let dayNumber: number | undefined;

  switch (day.toLowerCase()) {
    case "monday":
      dayNumber = 1;
      break;
    case "tuesday":
      dayNumber = 2;
      break;
    case "wednesday":
      dayNumber = 3;
      break;
    case "thursday":
      dayNumber = 4;
      break;
    case "friday":
      dayNumber = 5;
      break;
    case "saturday":
      dayNumber = 6;
      break;
    case "sunday":
      dayNumber = 7;
      break;
    default:
      console.log("Error: Invalid day of the week.");
      return;
  }

  console.log(`The number corresponding to ${day} is: ${dayNumber}`);
}

// Test the function
dayOfWeek('Monday');
dayOfWeek('Friday');
dayOfWeek('Invalid');
