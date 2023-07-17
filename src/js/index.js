import NewsList from "%modules%/news-list-slider/news-list-slider";
import Header from "%modules%/header/header";
import Courses from "%modules%/courses/courses";
import Emitents from "%modules%/emitents/emitents";
import SearchButtonAll from "%modules%/search/search";
import PageTabs from "%modules%/page-tabs/page-tabs";
import ArticleSlider from "%modules%/article-page/article-page";



window.app = {};

window.app.header = new Header();
window.app.header.init();

window.app.newsList = new NewsList();
window.app.newsList.init();

window.app.courses = new Courses();
window.app.courses.init();

window.app.emitents = new Emitents();
window.app.emitents.init();

window.app.searchbuttonall = new SearchButtonAll();
window.app.searchbuttonall.init();

window.app.pagetabs = new PageTabs();
window.app.pagetabs.init();

window.app.articleslider = new ArticleSlider();
window.app.articleslider.init();