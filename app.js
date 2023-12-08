// Save this code in a file, for example, fetchAndRender.js

// Function to fetch HTML content from a given URL
function fetchAndRender(url, targetElementId) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch HTML content from ${url}`);
        }
        return response.text();
      })
      .then(htmlContent => {
        // Find the target element by its ID
        const targetElement = document.getElementById(targetElementId);
  
        // Check if the target element exists
        if (targetElement) {
          // Inject the fetched HTML content into the target element
          targetElement.innerHTML = htmlContent;
        } else {
          console.error(`Target element with ID ${targetElementId} not found`);
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  
}

fetchAndRender('https://mosesmadale.github.io/glc/', 'display-element');

