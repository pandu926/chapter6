const repo = require("./user.repo");

const getAllUsers = async() => {
    return await repo.repoAllUsers();
}
const createUsers = async(username, password) => {
    const usersExist = await repo.getUsersByUsername(username);
    if (!usersExist) {
        return await repo.repoCreateUsers(username, password);
    } else {
        return "user sudah ada";
    }
}

const updateUsers = async(userid, username, password) => {
    return await repo.repoUpdateUsers(userid, username, password);
}

const deleteUsers = async(userid) => {
    return await repo.repoDeleteUsers(userid);
}

const service = {
    getAllUsers,
    createUsers,
    updateUsers,
    deleteUsers,
}
module.exports = service;