const burgers = document.getElementsByClassName('burger-container')
const circles = document.getElementsByClassName('burger-container__bg-circle')

const line1 = document.getElementsByClassName('burger__first-line')[1]
const line2 = document.getElementsByClassName('burger__second-line')[1]

const burgerContainer = document.getElementsByClassName('nav-burger-menu')

// ! створив змінні і витягнув всі потрібні мені стилі


const openBurger = () => {  //! створив функцію, яка відповідає за активний бургер
    for (let circle of circles) {  // ! запустив цикл for of
        circle.classList.toggle('burger-container__bg-circle-active')
    }

    if (burgerContainer[0].classList.length === 1) {
        burgerContainer[0].classList.toggle('nav-burger-menu-active')
        line1.classList.toggle('burger__first-line-active')
        line2.classList.toggle('burger__second-line-active')
    } else {
        burgerContainer[0].className = 'nav-burger-menu'
        line1.classList.toggle('burger__first-line-active')
        line2.classList.toggle('burger__second-line-active')
    }
}


for (let burger of burgers) {
    burger.addEventListener('click', openBurger)
}

// ? Властивість classList повертає псевдомасив DOMTokenList, що містить всі класи елемента.
// ?  toggle  Якщо клас у елемента відсутній - додає, інакше - прибирає. Коли другим параметром передано false - видаляє вказаний клас, а якщо true - додає.