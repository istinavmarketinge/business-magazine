const UpButton = class UpButton {
    constructor() {}
    addClickListener() {
        if (!document.querySelector('.up_button')) return;
        document.querySelector('.up_button').addEventListener('click', () => {
            document.querySelector("header").scrollIntoView();
        })

        
    }
    init() {
        this.addClickListener();
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            console.log(currentScrollPos);
            if (currentScrollPos < 1000) {
                document.querySelector('.up_button').classList.add('hidden');
            } else {
                document.querySelector('.up_button').classList.remove('hidden');
            }
            prevScrollpos = currentScrollPos;
        }
    }
}

export default UpButton;