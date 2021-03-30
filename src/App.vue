<template>
  <TheHeaderNavigation></TheHeaderNavigation>
  <router-view />
  <TheFooter></TheFooter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheHeaderNavigation from "@/components/TheHeaderNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";
import "normalize.css";

export default defineComponent({
  name: "Home",
  components: {
    TheHeaderNavigation,
    TheFooter
  }
});
</script>

<style lang="scss">
html {
  font-size: 14px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1rem;
  line-height: 1.6rem;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
