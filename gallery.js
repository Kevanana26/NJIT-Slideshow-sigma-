let mCurrentIndex = 0 // Tracks the current image index
let mImages = [] // Array to hold GalleryImage objects
const mUrl = 'https://www.npoint.io/docs/a1386ba253a4d952169a' // Replace with actual JSON URL
const mWaitTime = 5000 // Timer interval in milliseconds

$(document).ready(() => {
  $('.details').hide() // Hide details initially

  let seconds = 0;
let intervalId;

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    document.getElementById("timer").innerText = seconds;
  }, 5000); // 5000 milliseconds = 5 seconds
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  seconds = 0;
  document.getElementById("timer").innerText = seconds;
  clearInterval(intervalId);
}

 

$('.more-Indicator').on('click', () => {
  $('#rot90').toggleClass(rotate, rot270);
  $('.details').toggleClass()
});

// Select the moreIndicator button and add a click event to:
  // - toggle the rotation classes (rot90 and rot270)
  // - slideToggle the visibility of the .details section

  $('.Next-Photo').on('click', () => {
    $('.showNextPhoto').show()
  })// Select the "Next Photo" button and add a click event to call showNextPhoto

  $('.Previous-Photo').on('click', () => {
    $('.showPreviousPhoto').show()
  })// Select the "Previous Photo" button and add a click event to call showPrevPhoto

  // Call fetchJSON() to load the initial set of images
  fetchJSON()
})

// Function to fetch JSON data and store it in mImages
function fetchJSON () {
  // Use $.ajax here to request the JSON data from mUrl
  // On success, parse the JSON and push each image object into mImages array
  // After JSON is loaded, call swapPhoto() to display the first image
}

// Function to swap and display the next photo in the slideshow
function swapPhoto () {
  // Access mImages[mCurrentIndex] to update the image source and details
  // Update the #photo element's src attribute with the current image's path
  // Update the .location, .description, and .date elements with the current image's details
}

// Advances to the next photo, loops to the first photo if the end of array is reached
function showNextPhoto () {
  // Increment mCurrentIndex and call swapPhoto()
  // Ensure it loops back to the beginning if mCurrentIndex exceeds array length
}

// Goes to the previous photo, loops to the last photo if mCurrentIndex goes negative
function showPrevPhoto () {
  // Decrement mCurrentIndex and call swapPhoto()
  // Ensure it loops to the end if mCurrentIndex is less than 0
}

// Starter code for the timer function
function startTimer () {
  // Create a timer to automatically call `showNextPhoto()` every mWaitTime milliseconds
  // Consider using setInterval to achieve this functionality
  // Hint: Make sure only one timer runs at a time
}
