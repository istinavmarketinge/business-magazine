import Glide from '@glidejs/glide';

const Courses = class Courses {
    constructor() {
        this.slider = null;
    }
    initSlider() {
        if (!document.querySelector('.courses.glide')) return;
        this.slider = new Glide('.courses.glide', {
            perView: 3,
            gap: 10,
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

export default Courses;