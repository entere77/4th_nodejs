// 채팅 기록 조회하기
async function getChats(connection) {
    const allChatsInfoQuery =`
          select * from chats;
    `
    const allChatsInfoRow = await connection.query(
        allChatsInfoQuery
    );
  
    return allChatsInfoRow[0];
  }
  
  module.exports = {
    getChats,
  };