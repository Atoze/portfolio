<template>
  <div
    class="playground"
    id="playground"
  >
    <h2>PLAYGROUND</h2>
    <div class="playground__content">
      <a
        href=""
        class="playground__item" 
      >
        <AppCard
          title="Rainbow Canvas"
          :text="['FireAlpacaやメディバンペイントで使えるブラシスクリプトの作成', 'キャンバス座標に対して虹色が引けるようになります']"
          language="Lua"
          imgUrl="img/playground__rainbow-canvas.png"
        ></AppCard>
      </a>
      <a
        href="https://atoze10.com"
        class="playground__item"
      >
        <AppCard
          title="@0pt - Homepage"
          text="個人サイト"
          :language="['Vue', 'Typescript', 'Wordpress']"
          imgUrl="img/playground__zhaki.png"
        ></AppCard>
      </a>
      <AppCard
        class="playground__item"
        title="ザキさんLINE BOT"
        :text="['Google SpreadSheetと連携して簡単な会話が出来るBOT', 'お天気を教えてくれる機能つき']"
        :language="['Firebase', 'Cloud Functions', 'Node.js']"
        imgUrl="img/firebase.svg"
      ></AppCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppCard from "@/components/AppCard.vue";

export default defineComponent({
  name: "Playground",
  components: {
    AppCard
  }
});
</script>

<style lang="scss" scoped>
.playground__content {
  display: flex;
  flex-wrap: wrap;
}

.playground__item {
  display: block;
  position: relative;
  width: 280px;
  max-width: 100%;
  margin: 1em 1.5%;
}
</style>
