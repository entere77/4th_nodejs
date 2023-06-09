const jwtMiddleware = require("../../../config/jwtMiddleware");
const categoryProvider = require("../../app/Category/categoryProvider");
const categoryService = require("../../app/Category/categoryService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 전체 카테고리 조회 API 
 * [GET] /categories
 */
exports.getCategories = async function (req, res) {
    const allCategories = await categoryProvider.allCategoriesList();

    return res.send(response(baseResponse.SUCCESS, allCategories));
};