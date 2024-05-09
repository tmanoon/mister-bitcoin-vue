<template>
  <ul v-if="contacts" class="contact-list">
    <li v-for="contact in contacts" :key="contact._id">
    <img
      :src="`https://robohash.org/${contact.name}?set=set3`"
      :alt="`${contact.name} picture`"
    />
      <h3>{{ contact.name }}</h3>
      <div class="user-actions">
        <button @click="onRemoveContact(contact._id)">Delete</button>
        <RouterLink :to="`/contact/${contact._id}`"><button>Details</button></RouterLink>
        <RouterLink :to="`/contact/edit/${contact._id}`"><button>Edit</button></RouterLink>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(id) {
        this.$emit('remove', id)
    }
  }
};
</script>

<style>
</style>