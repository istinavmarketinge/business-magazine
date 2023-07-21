const MaterialChooser = class MaterialChooser {
    constructor() {}
    addClickListener() {
        document.querySelector('.material-chooser__selector').addEventListener('click', (e) => {
            e.target.classList.toggle('isOpened');
        })
    }
    init() {
        this.addClickListener();
    }
}

export default MaterialChooser;