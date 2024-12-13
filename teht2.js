'use strict';

// Select the form and input elements
const form = document.querySelector('form');
const queryInput = document.getElementById('query');

// Add an event listener for form submission
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission
  event.preventDefault();

  // Get the value entered by the user
  const query = queryInput.value.trim();
  if (!query) {
    console.error('Input cannot be empty');
    return;
  }

  // Fetch data from the TVMaze API
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Print the search results to the console
    console.log(`Search results for "${query}":`, data);

    // Log individual series information
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
