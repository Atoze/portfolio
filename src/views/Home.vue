<template>
  <main>
    <Profile></Profile>
    <Playground></Playground>
    <Contact></Contact>
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
