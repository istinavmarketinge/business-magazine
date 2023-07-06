import NewsList from "%modules%/news-list-slider/news-list-slider";
import Courses from "%modules%/courses/courses";
import Emitents from "%modules%/emitents/emitents";

window.app = {};

window.app.newsList = new NewsList();
window.app.newsList.init();

window.app.courses = new Courses();
window.app.courses.init();

window.app.emitents = new Emitents();
window.app.emitents.init();