<template>
  <ul v-if="contacts" class="contact-list">
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
.contact-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 35px;
}

</style>