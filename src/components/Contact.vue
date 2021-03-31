<template>
  <h2 id="contact">CONTACT</h2>
  <div class="contact__content">
    <ContactForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactForm from "./ContactForm.vue"

export default defineComponent({
  name: "Contact",
  components: {
    ContactForm
  }
});
</script>

<style lang="scss" scoped>
  .contact__content {
    max-width: 720px;
  }
</style>
