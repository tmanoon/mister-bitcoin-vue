<template>
  <section class="contact-edit">
    <form @submit.prevent="save">
      <label for="name">Name</label>
      <input
        id="name"
        type="text"
        v-model="contact.name"
        placeholder="Contact's name"
      />
      <label for="email">Email</label>
      <input
        id="email"
        type="text"
        v-model="contact.email"
        placeholder="Contact's email"
      />
      <label for="phone">Phone</label>
      <input
        id="phone"
        type="tel"
        v-model="contact.phone"
        placeholder="Contact's phone"
      />
      <button>Save</button>
    </form>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";

export default {
  data() {
    return {
      contact: contactService.getEmptyContact(),
    };
  },
  methods: {
    async save() {
      try {
        await contactService.saveContact(this.contact);
        this.$router.push("/contact");
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  async created() {
    try {
      if (!this.$route.params.id) return;
      const id = this.$route.params.id;
      this.contact = await contactService.getContactById(id);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
</style>