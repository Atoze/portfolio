<template>
  <LandingCard></LandingCard>
  <main>
    <div class="home">
      <Profile class="home__content"></Profile>
      <Playground class="home__content"></Playground>
      <Contact class="home__content"></Contact>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contact from "@/components/Contact.vue";
import LandingCard from "@/components/LandingCard.vue"
import Playground from "@/components/Playground.vue";
import Profile from "@/components/Profile.vue";

export default defineComponent({
  name: "Home",
  components: {
    Contact,
    LandingCard,
    Playground,
    Profile
  }
});
</script>

<style lang="scss">
main {
  margin-top: 40px;
}
.home {
  max-width: 1200px;
  margin: auto;
  padding-left: max(8px, env(safe-area-inset-left));
  padding-right: max(8px, env(safe-area-inset-right));

  &__content {
    margin-bottom: 60px;
  }

  h2 {
    text-align: center;
    &::after {
      content: "";
      display: block;
      background: #666;
      width: 50%;
      height: 1px;
      margin: auto;
      margin-top: 12px;
    }
  }
}
</style>
