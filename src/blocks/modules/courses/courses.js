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
            peek: {
                before: 0,
                after: 100
            },
            breakpoints: {
                1280: {
                    perView: 2,
                    peek: {
                        before: 0,
                        after: 0
                    },
                },
                980: {
                    perView: 1,
                    gap: 0,
                    peek: {
                        before: 0,
                        after: 0
                    },
                }
            }
        }).mount();
    }
    init() {
        this.initSlider();
    }
}

export default Courses;