<template>
  <section v-if="user" class="home-page">
    <h1>Hello, {{ user.name }}</h1>
    <p class="date">Updated to {{ date }}</p>
    <p class="flex"><span class="balance"></span>{{ user.balance }}</p>
    <p class="flex"><span class="bitcoin"></span>{{ rate }}</p>
  </section>
</template>

<script>
import { userService } from "../services/user.service.js";
import { bitcoinService } from "../services/bitcoin.service.js";

export default {
  data() {
    return {
      user: {},
      rate: null,
    };
  },
  async created() {
    try {
      this.user = userService.getUser();
      this.rate = await bitcoinService.getRate(this.user.balance);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  computed: {
    date() {
      return new Date().toDateString();
    },
  },
};
</script>

<style>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-block: 18%;
  gap: 8px;
  color: #fff;
}

.date {
  font-size: 0.8em;
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
