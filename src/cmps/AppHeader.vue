<template>
  <header v-if="user" class="app-header">
    <div class="logo">
      <p>MisterBitCoin</p>
    </div>
    <section class="user">
      <h3>Hello, {{ user.name }}</h3>
      <p>You have {{ user.balance }} coins</p>
    </section>
    <ul class="routes">
      <RouterLink to="/contact"><li>Contacts |</li></RouterLink>
      <RouterLink to="/"><li>Home |</li></RouterLink>
      <RouterLink to="/stats"><li>Statistics</li></RouterLink>
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
.logo {
  font-family: poppins, Tahoma;
}
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