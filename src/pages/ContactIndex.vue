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

import ContactList from "../cmps/ContactList.vue";
import ContactFilter from "../cmps/ContactFilter.vue";

export default {
  components: {
    ContactList,
    ContactFilter,
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  methods: {
    async removeContact(id) {
      try {
        this.$store.dispatch({ type: "deleteContact", id });
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    async onFilter(filterBy) {
      try {
        this.$store.dispatch({ type: "loadContacts", filterBy });
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
  },
  async created() {
    try {
      this.$store.dispatch({ type: "loadContacts" });
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