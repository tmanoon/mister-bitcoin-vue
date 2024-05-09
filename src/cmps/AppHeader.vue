<template>
  <header v-if="user" class="app-header">
    <section class="user">
    <h3>Hello, {{ user.name }}</h3>
    <p>You have {{ user.balance }} coins</p>
    </section>
    <ul class="routes">
        <RouterLink to="/contact"><li>Contacts</li></RouterLink>
        <RouterLink to="/"><li>Home</li></RouterLink>
    </ul>
  </header>
</template>

<script>
import { userService } from "../services/user.service.js";
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.user = userService.getUser();
  },
};
</script>

<style>
.app-header {
  display: flex;
  justify-content: space-between;
}

.user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
</style>