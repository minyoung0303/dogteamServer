const userModel = require('../models/userModel');
const { Op } = require('sequelize');

exports.getAllUsers = async () => {
  const users = await userModel.findAll();
  return users;
};

exports.searchUsers = async (searchTerm) => {
    if (!searchTerm) return [];
    // email, 닉네임, village 등 컬럼 부분에서 부분일치 검색
    const users = await userModel.findAll({
        where: {
            [Op.or]: [
                { email: { [Op.like]: `%${searchTerm}%` } },
                { nickName: { [Op.like]: `%${searchTerm}%` } },
                { village: { [Op.like]: `%${searchTerm}%` } }
            ]
        }
    });
    return users;
}