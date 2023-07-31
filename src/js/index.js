import NewsList from "%modules%/news-list-slider/news-list-slider";
import Header from "%modules%/header/header";
import Courses from "%modules%/courses/courses";
import Emitents from "%modules%/emitents/emitents";
import SearchButtonAll from "%modules%/search/search";
import ArticleSlider from "%modules%/article-page/article-page";
import MaterialChooser from "%modules%/material-chooser/material-chooser";
import EmitentsTab from "%modules%/emitents-tabs/emitents-tabs";
import StatTabs from "%modules%/emitents-single-stat-tabs/emitents-single-stat-tabs";
import UpButton from "%modules%/up-button/up-button";



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

// window.app.pagetabs = new PageTabs();
// window.app.pagetabs.init();

window.app.articleslider = new ArticleSlider();
window.app.articleslider.init();

window.app.materialChooser = new MaterialChooser();
window.app.materialChooser.init();

window.app.emitentsTabs = new EmitentsTab();
window.app.emitentsTabs.init();

window.app.statTabs = new StatTabs();
window.app.statTabs.init();

window.app.upButton = new UpButton();
window.app.upButton.init();