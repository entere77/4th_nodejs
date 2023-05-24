module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 유저 생성 기능
    app.post('/users/signup', user.signup);

    // 유저 정보 수정 기능
    app.post('/users/:userId', user.updateinfo);

};