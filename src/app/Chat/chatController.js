const jwtMiddleware = require("../../../config/jwtMiddleware");
const chatProvider = require("../../app/chatgory/chatProvider");
const chatService = require("../../app/chat/chatService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 전체 채팅 기록 조회하기
 * [GET] /chat
 */
exports.getChats = async function (req, res) {
    const allChats = await chatProvider.allCategoriesList();

    return res.send(response(baseResponse.SUCCESS, allChats));
};

/**
 * API No. 2
 * API Name : 특정 채팅 기록 선택하기
 * [GET] /chat/:chatingId
 */
exports.getChatBySelect = async function (req, res) {
    const chatBySelect = await chatProvider.chatBySelect();

    return res.send(response(baseResponse.SUCCESS, chatBySelect));
};