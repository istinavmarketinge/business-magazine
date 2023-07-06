import Glide from '@glidejs/glide';

const NewsList = class NewsList {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.news-list.glide')) return;
        this.slider = new Glide('.news-list.glide', {
            perView: 3,
            gap: 60,
            bound: true,
            breakpoints: {
                1280: {
                    perView: 2
                },
                980: {
                    perView: 1,
                    gap: 0
                }
            }
        }).mount();
    }
    init() {
        this.initSlider();
    }
}

export default NewsList;