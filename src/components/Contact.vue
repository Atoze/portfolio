<template>
  <div class="contact">
    <AppScrollReveal>
      <h2 id="contact">CONTACT</h2>
    </AppScrollReveal>
    <AppScrollReveal :delay="400">
      <div class="contact__content">
        <ContactForm />
      </div>
    </AppScrollReveal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "./ContactForm.vue"
import AppScrollReveal from "@/components/AppScrollReveal.vue";

export default defineComponent({
  name: "Contact",
  components: {
    ContactForm,
    AppScrollReveal
  }
});
</script>

<style lang="scss" scoped>
  .contact__content {
    max-width: 720px;
    margin: auto;
  }
</style>
