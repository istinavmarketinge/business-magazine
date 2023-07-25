const MaterialChooser = class MaterialChooser {
    constructor() {}
    addClickListener() {
        if (!document.querySelector('.material-chooser__selector')) return;
        document.querySelector('.material-chooser__selector').addEventListener('click', (e) => {
            e.target.classList.toggle('isOpened');
        })
    }
    init() {
        this.addClickListener();
    }
}

export default MaterialChooser;