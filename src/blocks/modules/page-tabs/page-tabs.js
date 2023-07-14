import Glide from '@glidejs/glide';

const PageTabs = class PageTabs {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.page-tabs__in.glide')) return;
        this.slider = new Glide('.page-tabs__in.glide', {
            perView: 4,
            gap: 16,
            bound: true,
            peek: {
                before: 0,
                after: 100
            },
            breakpoints: {
                1280: {
                    perView: 3,
                    peek: {
                        before: 0,
                        after: 100
                    },
                },
                980: {
                    perView: 2,
                    
                }
            }
        }).mount();
    }
    init() {
        this.initSlider();
    }
}

export default PageTabs;