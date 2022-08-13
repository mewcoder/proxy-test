<template>
  <div id="app">
    <pre>{{ text }}</pre>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    fetch("/api/1")
      .then((response) => response.json())
      .then((json) => (this.text = JSON.stringify(json, null, 2)));
  },
};
</script>

<style>
</style>
