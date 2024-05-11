<template>
  <ul v-if="contacts" class="contact-list flex column">
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
    </li>
  </ul>
</template>

<script>
import ContactPreview from './ContactPreview.vue';

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  components: {
    ContactPreview,
  },
  methods: {
    onRemoveContact(id) {
      this.$emit("remove", id);
    },
  },
};
</script>

<style>
</style>