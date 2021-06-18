const burgers = document.getElementsByClassName('burger-container')
const circles = document.getElementsByClassName('bg-circle')

const line1 = document.getElementsByClassName('burger__first-line')[1]
const line2 = document.getElementsByClassName('burger__second-line')[1]

const burgerContainer = document.getElementsByClassName('nav-burger-container')



const openBurger = () => {
    for (let circle of circles) {
        circle.classList.toggle('bg-circle-active')
    }
    if (burgerContainer[0].classList.length === 1) {
        burgerContainer[0].classList.toggle('nav-burger-container-active')
        line1.classList.toggle('burger__first-line-active')
        line2.classList.toggle('burger__second-line-active')
    } else {
        burgerContainer[0].className = 'nav-burger-container'
        line1.classList.toggle('burger__first-line-active')
        line2.classList.toggle('burger__second-line-active')
    }
}


for (let burger of burgers) {
    burger.addEventListener('click', openBurger)
}
