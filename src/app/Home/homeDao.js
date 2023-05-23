// 유저 생성
async function getCategories(connection) {
    const allCategoriesInfoQuery =`
          select * from category;
    `
    const allCategoriesInfoRow = await connection.query(
        allCategoriesInfoQuery
    );
  
    return allCategoriesInfoRow[0];
  }
  
  module.exports = {
    getCategories,
  };