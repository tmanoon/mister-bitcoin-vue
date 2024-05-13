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
        saveContact(state, contact) {
            const index = state.contacts.findIndex(c => c._id === contact._id)
            if (index !== -1) {
                state.contacts[index] = contact
            } else {
                state.contacts.push(contact)
            }
        }
    },
    actions: {
        async loadContacts({ commit }, filterBy) {
            const contacts = await contactService.query(filterBy)
            commit('setContacts', contacts)
        },
        async getById({ commit, state }, contactId) {
            let contact = state.contacts.find(contact => contact._id === contactId)
            // if (!contact) {
            //     contact = await contactService.getById(id)
            // }
            return contact
        },
        async saveContact({ commit }, contact) {
            const savedContact = await contactService.save(contact)
            commit('saveContact', savedContact)
        },
        async deleteContact({ commit }, contactId) {
            await contactService.remove(contactId)
            commit('removeContact', contactId)
        }
    },
    getters: {
        getContacts(state) {
            return state.contacts
        },
        getEmptyContact() {
            return contactService.getEmptyContact()
        },
        getUser(state){
            return userService.getUser()
        }
    }
})
