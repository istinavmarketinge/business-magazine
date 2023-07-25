import $ from 'jquery';

const EmitentsTab = class EmitentsTab {
    constructor() {}
    getActiveTabBounds() {
        if (!document.querySelector('.emitents-tabs__title--active')) return;
        var parentPos = document.querySelector('.emitents-tabs__titles').getBoundingClientRect();
        var childPos = document.querySelector('.emitents-tabs__title--active').getBoundingClientRect();
        window.document.styleSheets[0].insertRule(`.emitents-tabs__titles_line { left: ${childPos.left - parentPos.left * 1}px; width: ${childPos.width}px; }`, window.document.styleSheets[0].cssRules.length);
    }
    chooseTab() {
        if (!document.querySelector('.emitents-tabs__title')) return;
        document.querySelectorAll('.emitents-tabs__title').forEach(title => {
            title.addEventListener('click', (e) => {
                document.querySelector('.emitents-tabs__title--active').classList.remove('emitents-tabs__title--active');
                e.target.classList.add('emitents-tabs__title--active');
                this.getActiveTabBounds();

                console.log()
                $(`.emitents-tabs__block--active`).slideUp().removeClass('emitents-tabs__block--active');
                $(`[data-block_id="${e.target.dataset.tab_id}"]`).slideDown().addClass('emitents-tabs__block--active');
            })
        })
    }
    init() {
        this.getActiveTabBounds();
        this.chooseTab();
    }
}

export default EmitentsTab;