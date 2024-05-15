import { utilService } from "./util.service"

const CONTACT_DB = 'contact_db'

function getUser() {
    let user = utilService.loadFromStorage(CONTACT_DB) ? utilService.loadFromStorage(CONTACT_DB)
    : _getEmptyUser()
    return user
}
function signup(username) {
        const cachedUser = utilService.loadFromStorage(CONTACT_DB)
        if(cachedUser && cachedUser.username === username) return cachedUser
        const user = _getEmptyUser()
        user.username = username
        utilService.saveToStorage(CONTACT_DB, user)
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