/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
      modalButton = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let activeModal =  (modalClick) => {
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) =>{
    modalButton.addEventListener('click',() => {
        activeModal(i)
    })
})

modalClose.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/
const swiperTestimonial = new Swiper('.testimonial__swiper',{
    loop: true,
    grabCursor: true,
    pagination:{
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    }
})

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport heights, add the show-scroll class to a tag with the scroll-up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset: true //Animations repeat
})

sr.reveal(`.home__perfil, .description__img, .tutor__title, .footer, .project__text`)
sr.reveal(`.home__data, .description__list, .project_button`, {delay: 500})
sr.reveal(`.banner__text, .discount__images`, {delay: 500, origin: 'left'})
sr.reveal(`.banner__img, .discount__data`, {delay: 500, origin: 'right'})
sr.reveal(`.testimonial__container`, {delay: 500, origin: 'bottom'})