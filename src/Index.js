function displayPoem(response) {
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generatePoem(event) {
    event.preventDefault();

document.getElementById("generator-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Generate the poem text
    const poem = `Fingers on keys, dreams in flight,
  Lines of code, shining bright.
  No walls too high, no end in sight,
  She finds her place, coding with might.`;
  
    // Display the poem in the result container
    const resultContainer = document.getElementById("generated-content");
    resultContainer.textContent = poem; // Set the poem as text
    resultContainer.classList.remove("hidden"); // Make the result container visible
  });
  