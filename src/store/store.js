import { createStore } from 'vuex'
import { contactService } from '@/services/contact.service'
import { userService } from '@/services/user.service'

export default createStore({
    strict: true,
    state: {
        contacts: [],
        loggedInUser: null
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
    },
    actions: {
        async loadContacts({ commit }, filterBy) {
            const contacts = await contactService.query(filterBy)
            commit('setContacts', contacts)
        },
        async deleteContact({ commit }, contactId) {
            await contactService.remove(contactId)
            commit('removeContact', contactId)
        }
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
        emptyContact() {
            return contactService.getEmptyContact()
        },
        user(state){
            return state.loggedInUser
        }
    }
})
