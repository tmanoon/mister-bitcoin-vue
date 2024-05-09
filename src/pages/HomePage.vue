<template>
  <section v-if="user" class=home-page>
    <h1>Hello, {{user.name}}</h1>
    <p>{{user.rate}}</p>
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
      this.user = userService.getUser();
      this.user.rate = await bitcoinService.getRate(this.user.balance);
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
</script>

<style>
</style>
