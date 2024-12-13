'use strict';

// Select the form and input elements for JavaScript-enabled search
const form = document.querySelector('form:nth-of-type(2)');
const queryInput = document.querySelector('form:nth-of-type(2) #query');

// Add an event listener for form submission
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the value entered by the user
  const query = queryInput.value;

  // Make a fetch request to the TVMaze API
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Display the results in the console
    console.log('Search results:', data);

    // Log series information
    data.forEach((result) => {
      console.log(`Title: ${result.show.name}`);
      console.log(`Genres: ${result.show.genres.join(', ')}`);
      console.log(`Summary: ${result.show.summary}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error fetching TV show data:', error);
  }
});
