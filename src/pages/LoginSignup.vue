<template>
  <section class="login-signup flex column">
    <h1>Welcome to Mister Bitcoin</h1>
    <p>Please login here</p>
    <form @submit.prevent="onSubmit">
      <label for="username"></label>
      <input
        id="username"
        type="text"
        v-model="username"
        placeholder="Your username"
      />
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: null,
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch({ type: "setUser", username: this.username });
      this.$router.push("/");
    },
  },
  created() {
    const user = this.$store.getters.user;
    if (user.username) this.$router.push("/");
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