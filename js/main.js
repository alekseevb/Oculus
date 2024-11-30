const BTN_WHEN_ACTIVE = 'tabs__btn-item_active';
const CONTENT_WHEN_ACTIVE = 'tabs__content-item_active';

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

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


tabItem.forEach(function (element) {
    element.addEventListener('click', open);
})
