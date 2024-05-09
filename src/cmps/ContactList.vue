<template>
<ul v-if="contacts" class="contact-list">
    <li v-for="contact in contacts" :key="contact._id">
        <h3>{{contact.name}}</h3>
        <div class="user-actions">
            <button>Delete</button>
            <button>Details</button>
        </div>
    </li>
</ul>

"_id": "5a5664025c3abdad6f5e098c",
        "name": "Lilly Conner",
        "email": "lillyconner@renovize.com",
        "phone": "+1 (842) 587-3812"
  
</template>

<script>
export default {
props: {
        contacts: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style>

</style>