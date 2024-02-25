// Define toggleShowMore function in the global scope
function toggleShowMore(clubId, btn) {
    const content = document.getElementById(clubId + "-content");
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      btn.textContent = "Show Less";
    } else {
      content.style.display = "none";
      btn.textContent = "Show More";
    }
  }
  