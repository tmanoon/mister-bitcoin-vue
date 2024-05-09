<template>
  <section class="contact-details" v-if="selectedContact">
    <RouterLink to="/contact"><button>Back</button></RouterLink>
    <img
      :src="`https://robohash.org/${selectedContact.name}?set=set3`"
      :alt="`${selectedContact.name} picture`"
    />
    <h1>{{ selectedContact.name }}</h1>
    <h2>Email:</h2>
    <p>{{ selectedContact.email }}</p>
    <h2>Phone:</h2>
    <p>{{ selectedContact.phone }}</p>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";
export default {
  data() {
    return {
      selectedContact: {},
    };
  },
  async created() {
    try {
      this.selectedContact = await contactService.getContactById(
        this.$route.params.id
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
</style>