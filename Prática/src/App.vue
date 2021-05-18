<template>
  <div id="app">
    <Pagamento />
  </div>
</template>

<script>
import Pagamento from "./components/Pagamento.vue";

export default {
  name: "App",
  components: {
    Pagamento,
  },
};
</script>

<style>
#app {
  font-family: OpenSans, sans-serif;
  background-color: #f5f5f5;
}
body {
  margin: 0;
}
</style>
