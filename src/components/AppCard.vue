<template>
  <div class="card">
    <div class="card__header">
      <figure class="card__figure">
        <img
          :src="loadImg()"
          alt=""
          class="card__image"
        >
      </figure>
    </div>
    <div class="card__body">
      <h3 class="card__title">{{ props.title }}</h3>
      <p class="card__text">
        <template v-if="typeof props.text !== 'string'">
          <span v-for="(text, index) of props.text" :key="`text-${index}`">
            {{ text }}<br v-if="index < props.text.length - 1"/>
          </span>
        </template>
        <template v-else>{{ props.text }}</template>
      </p>
      <p class="card__text--language">
        開発環境:
        <template v-if="typeof props.language !== 'string'">
          <span v-for="(language, index) of props.language" :key="`language-${index}`">
            {{ language }}<template v-if="index < props.language.length - 1"> / </template>
          </span>
        </template>
        <template v-else>{{ props.language }}</template>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppCard",
  props:{
    imgUrl: String,
    title: String,
    text: [String, Array],
    language: [String, Array]
  },
  setup(props){
    const loadImg = () => {
      if(props.imgUrl){
      return props.imgUrl ? require(`@/assets/${props.imgUrl}`) : "";
      } else {
        return "";
      }
    };
    return { props, loadImg }
  }
});
</script>
<style lang="scss" scoped>
$figure-height: 200px;
.card {
  box-sizing: border-box;
  box-shadow: 0px 0px 2px 0px rgb(0 0 0 / 40%);
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: all 0.3s;
  height: 100%;
  &:hover {
    box-shadow: 0px 2px 6px 0px rgb(0 0 0 / 40%);
    transform: translateY(-2px);
  }

  &__figure {
    height: $figure-height;
    > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 3px 3px 0 0;
    }
  }
  &__body {
    display: flex;
    flex-direction: column;
    height: calc(100% - #{$figure-height} - 24px);
    padding: 12px;
    :last-child {
      margin-top: auto;

    }
  }
}
</style>
