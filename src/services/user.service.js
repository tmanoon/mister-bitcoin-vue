import { utilService } from "./util.service"

const USER_DB = 'user_db'

function getUser() {
    let user = utilService.loadFromStorage(USER_DB) ? utilService.loadFromStorage(USER_DB)
    : _getEmptyUser()
    return user
}
function signup(username) {
        const cachedUser = utilService.loadFromStorage(USER_DB)
        if(cachedUser && cachedUser.username === username) return cachedUser
        const user = _getEmptyUser()
        user.username = username
        utilService.saveToStorage(USER_DB, user)
        return user
}

function _getEmptyUser() {
    return {
        username: '',
        balance: 100,
        transactions: []
    }
}

export const userService = {
    getUser,
    signup
}