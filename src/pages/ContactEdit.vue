<template>
  <section class="contact-edit flex column">
    <RouterLink to="/contact"
      ><button class="back-btn">Back</button></RouterLink
    >
    <form @submit.prevent="save" class="flex column">
      <img
        v-if="contact._id"
        :src="`https://robohash.org/${contact.name}?set=set3`"
        :alt="`${contact.name} picture`"
      />
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
      <div class="buttons flex column">
        <button>Save</button>
        <button v-if="contact._id" @click="onDelete()">Delete</button>
        <button type="button" v-else @click.stop="onCancel()">Cancel</button>
      </div>
    </form>
  </section>
</template>

<script>
import { contactService } from "../services/contact.service.js";

export default {
  data() {
    return {
      contact: {},
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
        const idx = this.contacts.findIndex(
          (_contact) => _contact._id === this.contact._id
        );
        this.contacts.splice(idx, 1);
        await contactService.deleteContact(this.contact._id);
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    onCancel() {
      this.contact = contactService.getEmptyContact();
    },
  },
  async created() {
    try {
      const id = this.$route.params.id;
      if (!id) {
        this.contact = contactService.getEmptyContact();
      } else {
        this.contact = await contactService.getContactById(id);
        this.contacts = await contactService.getContacts();
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
.contact-edit {
  padding: 20px;
}

.contact-edit form {
  align-items: center;
  gap: 10px;
}

form input {
  padding: 5px;
}

.buttons {
  gap: 20px;
  margin-block-start: 20px;
}

.contact-edit img {
  width: 205px;
}

.contact-edit input {
  color: #222;
}
</style>