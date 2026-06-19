const links = document.querySelectorAll('.clickable');
  const sound = document.getElementById('click-sound');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // stop immediate navigation

      sound.currentTime = 0;
      sound.play();

      const targetUrl = link.href;

      const handler = () => {
        window.location.href = targetUrl;
        sound.removeEventListener('ended', handler);
      };

      sound.addEventListener('ended', handler);
    });
  });