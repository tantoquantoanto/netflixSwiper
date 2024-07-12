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


const inputContainer = document.getElementById("inputContainer");
const anchorInput = document.querySelector("#inputContainer a");

console.log(anchorInput);

const createInput = () => {
    let divInput = inputContainer.querySelector('input');
    if (!divInput) {
        divInput = document.createElement("input");
        divInput.setAttribute("type", "text");
        inputContainer.insertBefore(divInput, anchorInput);
    }
    return divInput;
};

anchorInput.addEventListener("click", (e) => {
   
    const inputElement = createInput();
    
    if (inputElement.style.display === 'none' || inputElement.style.display === '') {
        inputElement.style.display = 'block';
    } else {
        inputElement.style.display = 'none';
    }
});



const elementToTrack = document.querySelectorAll('.sectionToShow')
console.log(elementToTrack)

const options = {
    rootMargin: '0px',
    threshold: 0.8 // 50%
}

const callBack = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
        } else {
            entry.target.classList.remove('visible')
        }
    })
}

const observer = new IntersectionObserver(callBack, options)


elementToTrack.forEach(element => {
    observer.observe(element)
})
