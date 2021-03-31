<template>
  <nav id="nav" class="header-navigation">
    <router-link to="#profile" class="navigation__item">Profile</router-link>
    <router-link to="#playground" class="navigation__item">Playground</router-link>
    <router-link to="#contact" class="navigation__item">Contact</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .header-navigation {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    padding: 24px max(8px, env(safe-area-inset-left)) 24px max(8px, env(safe-area-inset-left)); 
    text-align: right;
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