<template>
  <header v-if="user" class="app-header">
    <RouterLink to="/">
      <div class="logo">
        <p>Mister<span id="bit-txt">Bit</span>coin</p>
      </div>
    </RouterLink>
    <section class="user">
      <p>{{ user.name }}</p>
      <span>・</span>
      <p>{{ user.balance }} coins</p>
    </section>
    <ul class="routes">
      <RouterLink to="/contact"><li>Contacts</li></RouterLink
      ><span>|</span>
      <RouterLink to="/"><li>Home</li></RouterLink
      ><span>|</span>
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
  padding-block: 0.7em;
}

.logo, .routes li, .routes span,
.user {
  color: #fff;
}

.logo > * {
  font-size: 1.3em;
  cursor: pointer;
}

#bit-txt {
  color: rgb(236, 217, 71);
}

ul {
  display: flex;
  align-items: center;
  gap: 8px;
}

ul li:hover {
  /* text-decoration: line-through; */
  transform: scale(0.8);
  transition: 0.4s;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
}
</style>