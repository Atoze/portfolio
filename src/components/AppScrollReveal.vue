<template>
<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">
  <div class="scroll-reveal" ref="monitor">
    <div
      class="scroll-reveal__content"
      :class="{ visible: state.inView }">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../../declare/scrollmonitor.d.ts" />
import { defineComponent, onMounted, reactive, ref } from "vue";
import scrollMonitor from "scrollmonitor";

export default defineComponent({
  name: "AppScrollReveal",
  props: {
    delay: Number
  },
  setup(props) {
    const monitor = ref(null);
    const state = reactive({
      inView: false
    });
    onMounted(() => {
      const scrollElem = monitor.value;
      const watcher = scrollMonitor.create(scrollElem, 0);
      watcher.enterViewport(() => {
        if(props.delay) {
          setTimeout(() => { state.inView = true; }, props.delay);
        } else {
          state.inView = true;
        }
        watcher.destroy();
      });
    });
    return {
      monitor,
      state
    };
  }
});
</script>

<style lang="scss" scoped>
  .scroll-reveal__content {
    opacity: 0;
    transform: translateY(8px);
    transition: all 0.8s;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>