<template>
  <section class="contact-preview">
    <img
      :src="`https://robohash.org/${contact.name}?set=set3`"
      :alt="`${contact.name} picture`"
    />
    <h3>{{ contact.name }}</h3>
    <div class="user-actions">
      <button @click="onRemoveContact(contact._id)">Delete</button>
      <RouterLink :to="`/contact/${contact._id}`"
        ><button>Details</button></RouterLink
      >
      <RouterLink :to="`/contact/edit/${contact._id}`"
        ><button>Edit</button></RouterLink
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>