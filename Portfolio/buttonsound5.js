// Get all image map area links
const links = document.querySelectorAll('area');

// Get the audio element
const sound = document.getElementById('click-sound');

// Loop through each link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the link from immediately opening
        event.preventDefault();
        
        // Play the sound
        sound.play();

        // Once the sound is finished, navigate to the link
        sound.onended = function() {
            // Now open the link after sound ends
            window.location.href = link.href;
        };
    });
});