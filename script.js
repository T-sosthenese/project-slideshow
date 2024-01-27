let slideIndex = 0; // Initialize slide index
showSlides();

// Function to display slides
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index and reset if out of range
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display current slide
    slides[slideIndex - 1].style.display = "block";

    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Set active dot for current slide
    dots[slideIndex - 1].className += " active";

    // Call showSlides function every 3 seconds
    setTimeout(showSlides, 4000);
}

// Function to switch to specific slide
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
