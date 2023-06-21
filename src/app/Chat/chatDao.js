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

// 특정 채팅 기록 조회하기
async function getChatBySelect(connection) {
  const selectedChatInfoQuery =`
        select * from chats where chat_id = ?;
  `
  const selectedChatInfoRow = await connection.query(
    selectedChatInfoQuery
  );

  return selectedChatInfoRow[0];
}
  
  module.exports = {
    getChats,
    getChatBySelect,
  };