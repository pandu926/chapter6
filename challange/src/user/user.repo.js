const { user_game } = require("../database/models");

const repoAllUsers = async() => {
    return await user_game.findAll();
}

const getUsersByUsername = async(username) => {
    return await user_game.findOne({
        where: { username: username }
    });
}

const repoCreateUsers = async(username, password) => {
    return await user_game.create({
        username: username,
        password: password,
    });
}

const repoUpdateUsers = async(userid, username, password) => {
    return await user_game.update({
        userid,
        username,
        password
    }, {
        where: {
            id: userid,
        },
    });
}

const repoDeleteUsers = async(userid) => {
    return await user_game.destroy({
        where: {
            id: userid,
        }
    });
}

const repo = {
    repoAllUsers,
    repoCreateUsers,
    getUsersByUsername,
    repoUpdateUsers,
    repoDeleteUsers,
}
module.exports = repo;