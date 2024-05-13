<template>
  <section class="contact-index flex column">
    <RouterLink :to="`/contact/edit/`"
      ><button class="add-contact">Add a contact</button></RouterLink
    >
    <ContactFilter @filter="onFilter" />
    <ContactList @remove="removeContact" :contacts="contacts" />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import ContactList from "../cmps/ContactList.vue";
import ContactFilter from "../cmps/ContactFilter.vue";

export default {
  data() {
    return {
      contacts: [],
    };
  },
  components: {
    ContactList,
    ContactFilter,
  },
  methods: {
    async removeContact(id) {
      try {
        await contactService.deleteContact(id);
        const idx = this.contacts.findIndex(contact => contact._id === id);
        this.contacts.splice(idx, 1);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async onFilter(filterBy) {
      try {
        this.contacts = await contactService.getContacts(filterBy);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  async created() {
    try {
      this.contacts = await contactService.getContacts();
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
.contact-index {
  margin-block: 35px;
  padding-inline: 20px;
  gap: 35px;
}
</style>