<template>
  <main>
    <div
      class="profile"
      id="profile"
    >
      <h2>PROFILE</h2>
      <div class="profile__content">
        <div class="profile__name profile__item">
          和田 真理菜 - Marina Wada
        </div>
        <div class="profile__hn profile__item">
          <h3>HN</h3>
          <p>あとぜ - Atoze</p>
        </div>
        <div class="profile__interest profile__item">
          <h3>Interest</h3>
          <p>
            UIやUXに興味を持っております。<br />
            様々なコンテンツをクリエイティブ＆システマチックに表現していけたらなあと思っております。
          </p>
        </div>
        <div class="profile__biography profile__item">
          <h3>BIOGRAPHY</h3>
          <dl>
            <dt>2020年</dt>
            <dd>都内のシステム開発会社にフロントエンド開発として所属</dd>
            <dd>Vueにて会場案内システムを書き換え</dd>
            <dt>2018年</dt>
            <dd>都内のシステム開発会社にシステムエンジニアとして所属</dd>
            <dd>Angularを利用したチケット販売システム（BtoB）の開発にアサイン</dd>
          </dl>
        </div>
        <div class="profile__skillset profile__item">
          <h3>SKILLSET</h3>
          Vue, Angular, Typescript, CSS, Git, GitHub
        </div>
        <div class="profile__likes profile__item">
          <h3>LIKES</h3>
          創作活動, 🐤, 🎮
          趣味で絵を描いたりしています
        </div>
        <div class="profile__links profile__item">
          <h3>LINK</h3>
          <div class="link__item">
            GitHub
            <a href="https://github.com/atoze">github.com/atoze</a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="playground"
      id="playground"
    >
      <h2>PLAYGROUND</h2>
      <div class="playground__content">
        <dl>
          <dt>Rainbow Canvas</dt>
          <dd>FireAlpacaやメディバンペイントで使えるブラシスクリプト</dd>
          <dd>キャンバス座標に対して虹色が引けるようになります</dd>
          <dd>Lua</dd>

          <dt>@0pt - Homepage</dt>
          <dd>個人サイト</dd>
          <dd>Vue / Typescript / Wordpress</dd>

          <dt>ザキさんLINE BOT</dt>
          <dd>Google SpreadSheetと連携して簡単な会話が出来るBOT</dd>
          <dd>お天気を教えてくれる機能つき</dd>
          <dd>Firebase / Cloud Functions / Node.js</dd>
        </dl>
      </div>
    </div>
    <div
      class="contact"
      id="contact"
    >
      <h2>CONTACT</h2>
      <div class="contact__content">
        <form>
          <div>
            <label for="name">お名前</label>
            <input
              type="text"
              name="name"
            >
          </div>
          <div>
            <label for="email">メールアドレス</label>
            <input
              type="email"
              name="email"
            >
          </div>
          <div>
            <label for="name">お問い合わせ内容</label>
            <textarea
              type="text"
              name="name"
              required
            />
            </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home"
});
</script>
