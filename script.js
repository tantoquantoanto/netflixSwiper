const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    breakPoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }

    }
})

// Funzione per controllare la visibilità delle sezioni durante lo scroll
function checkSectionVisibility() {
    // Otteniamo tutte le sezioni con la classe sectionToHide
    const sectionsToHide = document.querySelectorAll('.sectionToHide');
  
    // Iteriamo attraverso ogni sezione e verifichiamo se è visibile
    sectionsToHide.forEach(section => {
      // Ottieni la posizione della sezione rispetto alla finestra di visualizzazione
      const sectionTop = section.getBoundingClientRect().top;
  
      // Altezza della finestra di visualizzazione
      const windowHeight = window.innerHeight;
  
      // Se la parte superiore della sezione è nella finestra di visualizzazione, rimuovi la classe sectionToHide
      if (sectionTop <= windowHeight) {
        section.classList.remove('sectionToHide');
      }
    });
  }
  
  // Funzione per gestire l'evento scroll
  function handleScroll() {
    // Controlla la visibilità delle sezioni durante lo scroll
    checkSectionVisibility();
  }
  
  // Aggiungi un listener per l'evento scroll
  window.addEventListener('scroll', handleScroll);
  
  // Esegui checkSectionVisibility all'avvio per le sezioni già visibili
  checkSectionVisibility();
  

