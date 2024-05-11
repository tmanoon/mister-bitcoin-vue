<template>
  <section v-if="user" class="home-page">
    <h1>Hello, {{ user.name }}</h1>
    <p class="date">Updated to {{ date }} </p>
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
      date: null
    };
  },
  async created() {
    try {
      const user = userService.getUser();
      this.date = new Date().toDateString()
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
  margin-block: 20%;
  gap: 8px;
  color: #fff;
}

.date {
  font-size: .8em;
  margin-block: 1em;
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
  gap: 8px;
}
</style>
