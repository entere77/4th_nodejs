module.exports = function(app){
    const chatRoute = require('./chatRouteController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 전체 카테고리 조회 기능
    app.get('/chat', chat.getChat);
};