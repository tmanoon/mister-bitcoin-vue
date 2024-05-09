<template>
  <section v-if="contacts" class="contact-index">
    <ContactList :contacts="contacts" />
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
import ContactList from '../cmps/ContactList.vue';

export default {
  data() {
    return {
      contacts: [],
    };
  },
  components: {
    ContactList
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