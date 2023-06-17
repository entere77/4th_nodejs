module.exports = function(app){
    const chatRoute = require('./chatRouteController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 전체 채팅 기록 조회하기
    app.get('/chat', chat.getChat);

    // 특정 채팅 기록 선택하기
    app.get('/chat/:chatingId', chat.getChatBySelect);
};