import { createStore } from 'vuex'
import { contactService } from '@/services/contact.service'
import { userService } from '@/services/user.service'

export default createStore({
    strict: true,
    state: {
        contacts: [],
        loggedInUser: userService.getUser()
    },
    mutations: {
        setContacts(state, contacts) {
            state.contacts = contacts
        },
        removeContact(state, contactId) {
            const idx = state.contacts.findIndex(contact => contact._id === contactId)
            if (idx !== -1) {
                state.contacts.splice(idx, 1)
            }
        },
        setUser(state, user) {
            state.loggedInUser = user
        }
    },
    actions: {
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
                commit('setContacts', contacts)
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async deleteContact({ commit }, { contactId }) {
            try {
                await contactService.deleteContact(contactId)
                commit('removeContact', contactId)
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async setUser({ commit }, { username }) {
            try {
                const user = userService.signup(username)
                commit('setUser', user)
            } catch (err) {
                console.log(err)
                throw err
            }
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        emptyContact() {
            return contactService.getEmptyContact()
        },
        user(state) {
            return state.loggedInUser
        }
    }
})
