import $ from 'jquery';

const StatTabs = class StatTabs {
    constructor () {}
    selectTab() {
        if (!document.querySelector('.single-stat__title')) return;

        document.querySelectorAll('.single-stat__title').forEach(title => {
            title.addEventListener('click', (e) => {
                document.querySelector('.single-stat__title--active').classList.remove('single-stat__title--active');
                e.target.classList.add('single-stat__title--active'); 

                let tabId = e.target.dataset.stat_id;

                $('.single-stat__image--active').slideUp().removeClass('single-stat__image--active');
                $(`[data-img_id="${e.target.dataset.stat_id}"]`).slideDown().addClass('single-stat__image--active');
                console.log(tabId);
            })
        })
    }
    init() {
        this.selectTab();
    }
}

export default StatTabs;
