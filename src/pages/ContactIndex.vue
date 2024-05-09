<template>
  <section v-if="contacts" class="contact-index">
    <ContactList @remove="removeContact" :contacts="contacts" />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import ContactList from "../cmps/ContactList.vue";

export default {
  data() {
    return {
      contacts: [],
    };
  },
  components: {
    ContactList,
  },
  methods: {
    async removeContact(id) {
      try {
        const idx = this.contacts.findIndex(contact => contact._id === id)
        this.contacts.splice(idx, 1)
        await contactService.deleteContact(id)
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
</style>