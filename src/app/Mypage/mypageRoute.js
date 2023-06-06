module.exports = function(app){
    const mypage = require('./mypageController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    
    // mypage 조회 기능
    app.get('/mypage', mypage.getmypage);
    
    // mypage 관심목록 조회 기능
    app.get('/mypage/heart', mypage.getheart);
};