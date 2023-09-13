// Cache the background element to avoid multiple DOM queries
var bgElement;
console.log(bgElement);

// Set the initial position of the background
var bgPosition = 0;
// Set the width of the background image
const bgWidth = 512;

// Set the scroll speed of the background
const scrollSpeed = 0.5

// Set the parallax factor for the background image
const parallaxFactor = 0.1;

// Function to move the background image
function moveBackground() {
    // Get the current scroll position of the page
    var scrollTop = window.pageYOffset;

    // Calculate the new background position
    bgPosition -= scrollSpeed;

    // Wrap the background position when it goes beyond the negative width
    if (bgPosition <= -bgWidth) {
        bgPosition = 0;
    }

    // Update the background position using transform for better performance
    bgElement.style.transform = `translateX(${bgPosition}px) translateY(${
        scrollTop * parallaxFactor
    }px)`;

    // Call the function again on the next animation frame
    requestAnimationFrame(moveBackground);
}

// Initial call to start the animation
window.addEventListener("load", function () {
    bgElement = document.querySelectorAll(".bg")[0];
    moveBackground();
});