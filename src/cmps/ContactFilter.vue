<template>
  <div class="contact-filter">
    <label for="name">Name</label>
    <input id="name" @input="onFilter" v-model="filterBy.term" type="text" />
  </div>
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
  justify-content: flex-start;
  padding: 10px;
  gap: 10px;
  background-color: #0000000f;
  width: max-content;

  &, input {
    border-radius: 7px;
  }

  input {
    color: #222;
    padding-block: 3px;
    padding-inline: 7px;

    &:focus {
        outline: 2px lightblue solid;
        transition: .2s;
    }
  }
}
</style>