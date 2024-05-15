<template>
  <section class="login-signup flex column">
    <h1>Welcome to Mister Bitcoin</h1>
    <p>Please login here</p>
    <form @submit.prevent="onSubmit">
      <label for="username"></label>
      <input
        id="username"
        type="text"
        v-model="loggedInUser.username"
        placeholder="Your username"
      />
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.user;
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("setUser", this.loggedInUser.username);
      this.$router.push("/");
    },
  },
  created() {
    if (this.loggedInUser.username) this.$router.push("/");
  },
};
</script>

<style>
.login-signup {
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  h1 {
    margin-block-start: 18vw;
  }
  
  button {
    margin-block-start: 24px;
    width: 100%;
  }
}
</style>