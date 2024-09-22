document.getElementById("generator-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const instructions = document.getElementById("user-instructions").value;
    const resultContainer = document.getElementById("generated-content");
  
    let result = generatePoem(instructions);
  
    resultContainer.textContent = result;
    resultContainer.classList.remove("hidden");
  });
  
  // Simple AI logic to generate a poem based on a topic
  function generatePoem(topic) {
    switch (topic.toLowerCase()) {
      case "rise of the coder":
        return "Fingers on keys, dreams in flight,\nLines of code, shining bright.\nNo walls too high, no end in sight,\nShe finds her place, coding with might.";
      default:
        return "Her journey’s only just begun, not the end,\nWriting her story in lines of grace.";
    }
  }
  