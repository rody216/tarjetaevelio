const card = document.getElementById('businessCard');

  // Botón para ir al reverso
  document.getElementById('flipToBack').addEventListener('click', function(e) {
      e.stopPropagation();
      card.classList.add('flipped');
  });

  // Botón para volver al frente
  document.getElementById('flipToFront').addEventListener('click', function(e) {
      e.stopPropagation();
      card.classList.remove('flipped');
  });

  // Efecto ripple (igual al original)
  document.querySelectorAll('.social-link').forEach(link => {
      link.addEventListener('click', function(e) {
          const ripple = document.createElement('div');
          ripple.style.position = 'absolute';
          ripple.style.borderRadius = '50%';
          ripple.style.background = 'rgba(255, 255, 255, 0.6)';
          ripple.style.transform = 'scale(0)';
          ripple.style.animation = 'ripple 0.6s linear';
          ripple.style.left = '50%';
          ripple.style.top = '50%';
          ripple.style.width = '20px';
          ripple.style.height = '20px';
          ripple.style.marginLeft = '-10px';
          ripple.style.marginTop = '-10px';
          ripple.style.pointerEvents = 'none';
          ripple.style.zIndex = '3';
          
          this.appendChild(ripple);
          
          setTimeout(() => {
              ripple.remove();
          }, 600);
      });
  });

  // Estilo para ripple
  const style = document.createElement('style');
  style.textContent = `
      @keyframes ripple {
          to {
              transform: scale(4);
              opacity: 0;
          }
      }
  `;
  document.head.appendChild(style);