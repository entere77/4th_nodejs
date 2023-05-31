// 유저 생성
async function getHomeList(connection) {
    const homeInfoQuery =`
          select * from product;
    `
    const homeInfoRow = await connection.query(
        homeInfoQuery
    );
  
    return homeInfoRow[0];
  }
  
  module.exports = {
    getHomeList,
  };