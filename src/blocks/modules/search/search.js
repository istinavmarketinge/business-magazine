
const SearchButtonAll = class SearchButtonAll {
    constructor() { }

    accordionFunc(btnSelector, listSelector, parentSelector) {
        
        if (document.querySelector(btnSelector)) {
            let button =  document.querySelector(btnSelector);
            
            button.addEventListener('click', (event) => {
                let parent = event.target.closest(parentSelector);
                let list = parent.querySelector(listSelector);

                button.classList.toggle("isOpened");
                list.classList.toggle('isOpened');                
            });
        }
    }
   
    init() {
        this.accordionFunc('.search__button-all', '.search__list', '.search__list-wrapper');
    }
}

export default SearchButtonAll;

// if (document.querySelector('.search__button-all')) {
//     document.querySelector('.search__button-all').addEventListener('click', (event) => {
//         event.target.classList.toggle("isOpened");
//         event.target.closest(".search__list-wrapper").querySelector('.search__list').classList.toggle('isOpened');
//         console.log(event);
        
//     });
// }