const BTN_WHEN_ACTIVE = 'tabs__btn-item_active';
const CONTENT_WHEN_ACTIVE = 'tabs__content-item_active';

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
const openBurgerMenu = document.getElementById('openBurgerMenu')
const closeBurgerMenu = document.getElementById('closeBurgerMenu');
const burgerMenu = document.getElementById('burgerMenu');
const burgerContent = document.getElementById('burgerContent')
const body = document.querySelector('body')

const open = (e) => {
    const tabTarget = e.currentTarget;
    const button = tabTarget.dataset.button;
    const pressBtn = document.querySelector(`#${button}`);

    tabItem.forEach(function (item) {
        item.classList.remove(BTN_WHEN_ACTIVE);
    })

    tabContent.forEach(function (item) {
        item.classList.remove(CONTENT_WHEN_ACTIVE);
    })

    tabTarget.classList.add(BTN_WHEN_ACTIVE);

    pressBtn.classList.add(CONTENT_WHEN_ACTIVE);
}

const burgerOpenHandler = () => {
    burgerMenu.classList.add('burger-menu_hidden');
    body.classList.add('body_fixed');
}

const burgerCloseHandler = () => {
    burgerMenu.classList.remove('burger-menu_hidden');
    body.classList.remove('body_fixed');
}

burgerMenu.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContent)

    if (isClickOutsideContent) {
        burgerCloseHandler();
    }
})


tabItem.forEach(function (element) {
    element.addEventListener('click', open);
})

openBurgerMenu.addEventListener('click', burgerOpenHandler);
closeBurgerMenu.addEventListener('click', burgerCloseHandler)