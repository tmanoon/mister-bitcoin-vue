<template>
  <form class="contact-filter">
    <label for="name">Name</label>
    <input @input="onFilter" v-model="filterBy.term" type="text" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { term: "" },
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>

<style lang="scss">
.contact-filter {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
}
</style>