<template>
  <main>
    <div class="home">
      <Profile></Profile>
      <Playground></Playground>
      <Contact></Contact>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contact from "@/components/Contact.vue";
import Playground from "@/components/Playground.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  name: "Home",
  components: {
    Contact,
    Playground,
    Profile
  }
});
</script>
<style>
main {
  margin-top: 40px;
}
.home {
  max-width: 1200px;
  margin: auto;
  padding-left: max(8px, env(safe-area-inset-left));
  padding-right: max(8px, env(safe-area-inset-right));
}
</style>
