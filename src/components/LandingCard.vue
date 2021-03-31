<template>
  <div class="landing-card">
    <div class="landing-card__content">
      <AppScrollBlockReveal :delay="200">
        <h1 class="landing-card__title">
          ATOZE'S PORTFOLIO<span class="landing-card__title--dash"></span>
        </h1>
      </AppScrollBlockReveal>
      <br />
      <AppScrollBlockReveal :delay="400">
        <span>
          Everyday can be Beggining of Anything.
        </span>
      </AppScrollBlockReveal>
    </div>
    <Particles 
      id="landing-card"
      width="100vw"
      height="100vh"
      :options="{
        height: '100vh',
        background: {
          color: {
            value: '#fff'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'grab'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ccc'
          },
          links: {
            color: '#03111B',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.7
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 3
          }
        },
        detectRetina: true
      }"  
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppScrollBlockReveal from "@/components/AppScrollBlockReveal.vue";

export default defineComponent({
  name: "LandingCard",
  components: {
    AppScrollBlockReveal
  }
});
</script>

<style lang="scss" scoped>
  .landing-card {
    height: 100vh;
    margin-bottom: 60px;

    &__content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &__title {
      line-height: 2.4rem;
      &--dash {
        display: inline-block;
        vertical-align: bottom;
        width: 1.6rem;
        border-bottom: 1px solid black;
        animation: flash 1s linear infinite;
      } 
    }

    #landing-card {
      height: 100%;
    }
  }

  @keyframes flash {
    0%, 30%, 70%, 100% {
      opacity: 0;
    }

    41%, 59% {
      opacity: 1;
    }
  }

</style>