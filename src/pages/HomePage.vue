<template>
  <section v-if="user" class="home-page">
    <h1>Hello, <span>{{ user.name }}</span></h1>
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
      rate: null
    };
  },
  async created() {
    try {
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
    user() {
      return this.$store.getters.user
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
  margin-block: 18%;
  gap: 8px;
  color: #fff;
}

h1 {
  span {
    text-transform: capitalize;
  }
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
