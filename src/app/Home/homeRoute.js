module.exports = function(app){
    const home = require('./homeController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 홈 화면
    app.get('/home', home.getHome);
};