<template>
    <section v-if="contact" class="contact-preview flex column">
      <img
        :src="`https://robohash.org/${contact.name}?set=set3`"
        :alt="`${contact.name} picture`"/>
      <h3>{{ contact.name }}</h3>
    </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  }
};
</script>

<style>
.contact-preview {
  align-items: center;
  gap: 1em;
  background-color: #0000000f;
  border-start-start-radius: 10px;
  border-start-end-radius: 10px;
}

img {
  width: 40%;
  height: 40%;
}

</style>