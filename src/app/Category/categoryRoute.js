module.exports = function(app){
    const category = require('./categoryController');
    const jwtMiddleware = require('../../../config/jwtMiddleware');

    // 전체 카테고리 조회 기능
    app.get('/categories', category.getCategories);
};