<template>
  <div class="scroll-block-reveal" ref="reveal">
    <slot></slot>
  </div>
</template>

<script lang="ts">
/* global RevealFx */
/* global anime */
/* eslint-disable @typescript-eslint/no-explicit-any */ 
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../../declare/block-reveal.d.ts" />
/// <reference path="../../declare/scrollmonitor.d.ts" />

import { defineComponent, onMounted, ref } from "vue";
import scrollMonitor from "scrollmonitor";

export default defineComponent({
  name: "AppScrollBlockReveal",
  props: {
    backgroundColor: {
      type: String,
      default: "#2c3e50"
    },
    delay: Number
  },
  setup(props) {
    const reveal = ref(null);
    onMounted(() => {
      const scrollElem = reveal.value;
      const watcher = scrollMonitor.create(scrollElem, 0);
      const revealFx = new RevealFx(scrollElem, {
        revealSettings: {
          bgcolor: props.backgroundColor,
          delay: props.delay,
          onStart: (contentEl: any) => {
            anime.remove(contentEl);
            contentEl.style.opacity = 0;
          },
          onCover: (contentEl: any) => {
            contentEl.style.opacity = 1;
            anime({
              targets: contentEl,
              easing: "easeOutExpo"
            });
          }
        }
      });
      watcher.enterViewport(() => {
        revealFx.reveal();
        watcher.destroy();
      });
    });
    return {
      reveal
    };
  }
});
</script>
<style>
  .scroll-block-reveal {
    display: inline-block;
  }

  .block-revealer__element {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    pointer-events: none;
    opacity: 0;
  }
</style>
