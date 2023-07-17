import Glide from '@glidejs/glide';

const ArticleSlider = class ArticleSlider {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.article-page__slider.glide')) return;
        this.slider = new Glide('.article-page__slider.glide', {
            perView: 1,
            gap: 29,
            bound: true,
            peek: {
                before: 168,
                after: 168
            },
            breakpoints: {
                980: {
                    perView: 1,
                    gap: 6,
                    peek: {
                        before: 41,
                        after: 41
                    },
                    
                }
            }
        }).mount();
    }
    init() {
        this.initSlider();
    }
}

export default ArticleSlider;