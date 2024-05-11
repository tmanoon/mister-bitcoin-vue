<template>
  <section v-if="user" class="home-page">
    <h1>Hello, {{ user.name }}</h1>
    <p>Your current po</p>
    <p class="flex"><span class="balance"></span>{{ user.balance }}</p>
    <p class="flex"><span class="bitcoin"></span>{{ user.rate }}</p>
  </section>
</template>

<script>
import { userService } from "../services/user.service.js";
import { bitcoinService } from "../services/bitcoin.service.js";
export default {
  data() {
    return {
      user: {},
    };
  },
  async created() {
    try {
      const user = userService.getUser();
      user.rate = await bitcoinService.getRate(user.balance);
      this.user = user;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-block: 32.5%;
  gap: 8px;
}

.balance::before,
.bitcoin::before {
  font-family: fa-s;
}

.balance::before {
  content: "\f51e";
}

.bitcoin::before {
  content: "\e0b4";
}

p.flex {
  gap: 5px;
}
</style>
