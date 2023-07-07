const Header = class Header {
    constructor() { }
    toggleRegion() {
        if (!document.querySelector('.header__region-dropdown .active')) return;
        document.querySelector('.header__region-dropdown .active').addEventListener('click', (event) => {
            console.log(1231212123123123);
            event.target.closest('.header__region-dropdown').classList.toggle('isActive');
        })
    }
    closeRegion() {
        document.addEventListener('click', (event) => {
            if (event.target.closest('.header__region-dropdown')) return;
            document.querySelector('.header__region-dropdown').classList.remove('isActive');
        })
    }
    toggleBurger() {
        if (!document.querySelector('.header__burger_opener')) return;
        document.querySelector('.header__burger_opener').addEventListener('click', () => {
            document.querySelector('.header__burger').classList.toggle('isOpened');
        })
    }
    init() {
        this.toggleRegion();
        this.closeRegion();
        this.toggleBurger();
    }
}

export default Header;