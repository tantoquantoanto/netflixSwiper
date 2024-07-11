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


const sections = document.querySelectorAll("section")
console.log(sections)

let lastKnownScrollPosition = 0;
let sectionHeight = 0;
 
// funzione per mostrare la sezione
 

const showSection = (actualScrollPosition) => {
    sections.forEach(section => {
        sectionHeight = section.offsetTop;
        if (actualScrollPosition >= sectionHeight) {
            console.log("funzione eseguita");
            section.classList.remove("sectionToHide")
        }
    })
    
        
    }





document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    showSection(lastKnownScrollPosition)
}) 



