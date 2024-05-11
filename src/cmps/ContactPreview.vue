<template>
  <RouterLink :to="`/contact/${contact._id}`">
    <section class="contact-preview flex column">
      <img
        :src="`https://robohash.org/${contact.name}?set=set3`"
        :alt="`${contact.name} picture`"
      />
      <h3>{{ contact.name }}</h3>
      <div class="user-actions flex">
        <button @click="onRemoveContact(contact._id)">Delete</button>
        <RouterLink :to="`/contact/${contact._id}`"
          ><button>Details</button></RouterLink
        >
        <RouterLink :to="`/contact/edit/${contact._id}`"
          ><button>Edit</button></RouterLink
        >
      </div>
    </section>
  </RouterLink>
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
.contact-preview {
  align-items: center;
  gap: 1em;
  cursor: pointer;
  background-color: #0000000f;
}

img {
  width: 40%;
  height: 40%;
}

.user-actions {
  justify-content: space-between;
  align-items: center;
  gap: 3px;
}

.user-actions button {
  background-color: transparent;
  border: none;
  background-color: #b358ce;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #ffffff;
  display: flex;
  font-size: 1rem;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.55rem 1.45rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.user-actions button:focus {
  outline: 0;
}

.user-actions button::after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.user-actions button:hover::after {
  bottom: 2px;
  left: 2px;
}
</style>