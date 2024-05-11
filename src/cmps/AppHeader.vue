<template>
  <header v-if="user" class="app-header">
    <div class="logo">
      <p>Mister<span class="bit-txt">Bit</span>coin</p>
    </div>
    <section class="user">
      <h3>{{ user.name }}</h3>
      <p>| {{ user.balance }} coins</p>
    </section>
    <ul class="routes">
      <RouterLink to="/contact"><li>Contacts</li></RouterLink><span>|</span>
      <RouterLink to="/"><li>Home</li></RouterLink><span>|</span>
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
.app-header {
  display: flex;
  justify-content: space-between;
  background-color: lightblue;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  padding-inline: 20px;
  padding-block: 1.5em;
}

.logo > * {
  font-size: 1.3em;
}

p .bit-txt {
  color: rgb(236, 217, 71);
}

ul {
  display: flex;
  align-items: center;
  gap: 8px;
}

ul li:hover {
  /* text-decoration: line-through; */
  transform: scale(.8);
  transition: .4s;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
</style>