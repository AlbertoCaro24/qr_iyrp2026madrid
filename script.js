document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.agenda-slider');
  if (!slider) return;
  const images = slider.querySelectorAll('.slider-img');
  let current = 0;

  function showSlide(idx) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === idx);
    });
  }

  setInterval(() => {
    current = (current + 1) % images.length;
    showSlide(current);
  }, 2000);
});
(function(){
      const banner = document.getElementById('cookie-banner');
      const acceptBtn = document.getElementById('cookie-accept');
      const rejectBtn = document.getElementById('cookie-reject');
      const viewBtn = document.getElementById('cookie-view');

      // Oculta solo si el usuario ACEPTÓ previamente
      const decision = localStorage.getItem('iyrp_cookies_decision');
      if (decision === 'accepted') {
        banner.classList.add('hidden');
        banner.setAttribute('aria-hidden', 'true');
      }

      function hideBanner() {
        banner.classList.add('hidden');
        banner.setAttribute('aria-hidden', 'true');
      }

      acceptBtn.addEventListener('click', function() {
        try { localStorage.setItem('iyrp_cookies_decision', 'accepted'); } catch (e) {}
        hideBanner();
      });

      rejectBtn.addEventListener('click', function() {
        // NO guardamos 'rejected' para que al volver se pregunte otra vez
        hideBanner();
        // Intento de cerrar la pestaña (fallback a about:blank)
        try {
          window.close();
          setTimeout(function() {
            window.open('about:blank', '_self');
            window.location.href = 'about:blank';
          }, 300);
        } catch (e) {
          window.open('about:blank', '_self');
          window.location.href = 'about:blank';
        }
      });

      viewBtn.addEventListener('click', function() {
        window.location.href = '/cookies-es.html';
      });
    })();