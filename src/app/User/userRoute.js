module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 유저 생성 기능
    app.post('/users/signup', user.signup);

};