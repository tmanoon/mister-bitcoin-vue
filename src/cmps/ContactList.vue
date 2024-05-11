<template>
  <ul v-if="contacts" class="contact-list" @remove="onRemoveContact">
    <li v-for="contact in contacts" :key="contact._id">
      <ContactPreview :contact="contact" />
      <div class="user-actions flex">
        <button @click="onRemoveContact(contact._id)">Delete</button>
        <RouterLink :to="`/contact/${contact._id}`"
          ><button>Details</button></RouterLink
        >
        <RouterLink :to="`/contact/edit/${contact._id}`"
          ><button>Edit</button></RouterLink
        >
      </div>
    </li>
  </ul>
</template>

<script>
import ContactPreview from "./ContactPreview.vue";

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
  margin-block-end: 35px;
}

.user-actions {
  justify-content: space-between;
  align-items: center;
  gap: 3px;
  padding-block-start: 20px;
  background-color: #0000000f;
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
}

.user-actions button:hover {
  scale: 1.1;
  transition: 0.4s;
}
</style>