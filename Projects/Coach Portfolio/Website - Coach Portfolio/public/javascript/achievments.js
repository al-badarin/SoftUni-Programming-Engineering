document.addEventListener("DOMContentLoaded", function () {
  // Array of achievements
  const achievements = [
    "🏆 Champion of Bulgarian AFL Cup 2021",
    "🏆 Champion of Bulgaria 2017 (U14)",
    "🏆 x3 regional championships with 3 different teams (Ludogorets U14 | Beroe U16 | Spartak 1919 U17)",
    "🥉 Arab Cup 2022 - 3rd place w/ Palestine U20 National Team",
  ];

  // Function to create and display achievements
  function displayAchievements() {
    const achievementsContainer = document.querySelector(".achievements");

    // Loop through achievements array
    achievements.forEach((achievement, index) => {
      const achievementItem = document.createElement("div");
      achievementItem.classList.add("achievement");

      // Create and add icon
      const icon = document.createElement("span");
      icon.classList.add("achievement-icon");
    //   icon.innerHTML = "🏆";
      achievementItem.appendChild(icon);

      // Create and add text
      const text = document.createElement("p");
      text.classList.add("achievement-text");
      text.textContent = achievement;
      achievementItem.appendChild(text);

      // Add event listener for click
      achievementItem.addEventListener("click", () => {
        // Add your interactive functionality here
        console.log(`Clicked on achievement ${index + 1}: ${achievement}`);
      });

      achievementsContainer.appendChild(achievementItem);
    });
  }

  // Call the function to display achievements
  displayAchievements();
});
