<template>
  <section class="contact-edit">
    <RouterLink to="/contact"><button>Back</button></RouterLink>
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
      <button v-if="contact._id" @click="onDelete()">Delete</button>
      <button v-else @click="onCancel()">Cancel</button>
    </form>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";

export default {
  data() {
    return {
      contact: contactService.getEmptyContact(),
      contacts: [],
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
    async onDelete() {
      try {
        const idx = this.contacts.findIndex(_contact => _contact._id === this.contact._id);
        this.contacts.splice(idx, 1);
        await contactService.deleteContact(this.contact._id);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    onCancel() {
        this.contact = contactService.getEmptyContact()
    }
  },
  async created() {
    try {
      if (!this.$route.params.id) return;
      const id = this.$route.params.id;
      this.contact = await contactService.getContactById(id);
      this.contacts = await contactService.getContacts()
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
</style>