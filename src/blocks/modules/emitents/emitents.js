import Glide from '@glidejs/glide';

const Emitents = class Emitents {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.emitents.glide')) return;
        this.slider = new Glide('.emitents.glide', {
            perView: 2,
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

export default Emitents;