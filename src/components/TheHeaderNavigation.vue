<template>
  <nav id="nav"
    class="header-navigation"
    :class="{ 'mobile': state.isMobile }"
  >
    <router-link to="#profile" class="navigation__item">Profile</router-link>
    <router-link to="#playground" class="navigation__item">Playground</router-link>
    <router-link to="#contact" class="navigation__item">Contact</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";

export default defineComponent({
  name: "TheHeaderNavigation",
  setup(){
    const state = reactive({
      isMobile: false,
    });

    const checkIsMobile = () => {
      if (window.innerWidth > 400) {
        if (state.isMobile) {
          state.isMobile = false;
        }
      } else {
        if (!state.isMobile) {
          state.isMobile = true;
        }
      }
    };

    onMounted(() => {
      const mql = window.matchMedia("(min-width: 400px)");
      mql.addListener(mql => {
        if (mql.matches) {
          if (state.isMobile) {
            state.isMobile = false;
          }
        } else {
          if (!state.isMobile) {
            state.isMobile = true;
          }
        }
      });
      checkIsMobile();
    });

    return { state };
  }
});
</script>

<style lang="scss" scoped>
  .header-navigation {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    padding: 24px max(8px, env(safe-area-inset-left)) 24px max(8px, env(safe-area-inset-left)); 
    text-align: right;
    z-index: 99999;
    &.mobile {
      position: fixed;
    }
  }
  .navigation__item {
    display: inline-block;
    color: #000;
    font-weight: bold;
    margin-right: 24px;
    transition: transform 0.3s;

    &.router-link-exact-active {
      color: #576b80;
    }

    &:hover {
      transform: translateY(-2px);
    }
  }
</style>