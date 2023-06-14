const jwtMiddleware = require("../../../config/jwtMiddleware");
const chatProvider = require("../../app/chatgory/chatProvider");
const categoryService = require("../../app/chat/chatService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 전체 카테고리 조회 API 
 * [GET] /chat
 */
exports.getChats = async function (req, res) {
    const allChats = await chatProvider.allCategoriesList();

    return res.send(response(baseResponse.SUCCESS, allChats));
};