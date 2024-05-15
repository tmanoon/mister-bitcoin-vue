import { utilService } from "./util.service"

const user = {
    name: "Pooki Pikpooki",
    balance: 100,
    transactions: []
}

const CONTACT_DB = 'contact_db'

function getUser() {
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