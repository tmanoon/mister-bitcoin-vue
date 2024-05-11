<template>
  <section class="contact-details flex column" v-if="selectedContact">
    <RouterLink to="/contact" class="back-btn"><button>Back</button></RouterLink>
    <img
      :src="`https://robohash.org/${selectedContact.name}?set=set3`"
      :alt="`${selectedContact.name} picture`"
    />
    <h3>Name:</h3>
    <p>{{ selectedContact.name }}</p>
    <h3>Email:</h3>
    <p>{{ selectedContact.email }}</p>
    <h3>Phone:</h3>
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
      console.log;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
.contact-details {
  padding: 20px;
  align-items: center;
  gap: 10px;
}

.contact-details img {
  width: 205px;
}

.back-btn {
  align-self: flex-start;
}

</style>