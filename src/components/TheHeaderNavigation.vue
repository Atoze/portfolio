<template>
  <nav id="nav" class="header-navigation">
    <router-link to="#profile" class="navigation__item">Profile</router-link>
    <router-link to="#playground" class="navigation__item">Playground</router-link>
    <router-link to="#contact" class="navigation__item">Contact</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .header-navigation {
    text-align: right;
    padding: 24px max(8px, env(safe-area-inset-left)) 24px max(8px, env(safe-area-inset-left)) ; 
  }
  .navigation__item {
    display: inline-block;
    margin-right: 24px;
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-2px);
    }
  }
</style>