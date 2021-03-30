<template>
  <div
    class="profile"
    id="profile"
  >
    <h2>PROFILE</h2>
    <div class="profile__container">
      <div class="profile__name profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="pen"
          />NAME</h3>
        和田 真理菜 - Marina Wada
        <h3>HN</h3>
        <p>あとぜ - Atoze</p>
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="birthday-cake"
          />Birthday</h3>
        <p>02-23</p>
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="search"
          />Interest</h3>
        <p>
          UIやUXに興味を持っております。<br />
          様々なコンテンツをクリエイティブ＆システマチックに表現していけたらなあと思っております。
        </p>
      </div>
      <div class="profile__biography profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="book"
          />BIOGRAPHY</h3>
        <dl class="biography__list">
          <dt class="biography__item--title">2020年</dt>
          <dd class="biography__item">都内のシステム開発会社にフロントエンド開発として所属</dd>
          <dd class="biography__item">Vueにて会場案内システムを書き換え</dd>
          <dt class="biography__item--title">2018年</dt>
          <dd class="biography__item">都内のシステム開発会社にシステムエンジニアとして所属</dd>
          <dd class="biography__item">Angularを利用したチケット販売システム（BtoB）の開発にアサイン</dd>
        </dl>
      </div>
      <div class="profile__skillset profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="code"
          />SKILLSET</h3>
        <div class="skillset__container">
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/vuejs.svg">
            </div>
            Vue
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/angular.svg">
            </div>
            Angular
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/typescript.svg">
            </div>
            TypeScript
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/javascript.svg">
            </div>
            JavaScript
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/html5.svg">
            </div>
            HTML
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/css3.svg">
            </div>
            CSS
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/git.svg">
            </div>
            Git
          </div>
          <div class="skillset__item">
            <div class="skillset__item--logo">
              <img src="@/assets/img/github.svg">
            </div>
            GitHub
          </div>
        </div>
        <!--
        <h3>
          <FontAwesomeIcon icon="desktop" />ENVIRONMENT</h3>
        <div>
          Mac, Windows
        </div>
        -->
      </div>
      <div class="profile__likes profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="star"
          />LIKES</h3>
        <p>
          創作活動, 🐤, 🎮
          趣味で絵を描いたりしています
        </p>
      </div>
      <div class="profile__links profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="globe"
          />LINK</h3>
        <p>
          <a href="https://github.com/atoze">
            <FontAwesomeIcon :icon="['fab','github']" />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.profile {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__item {
    box-sizing: border-box;
    background: #ccc;
    width: calc(50% - 16px);
    max-width: 100%;
    padding: 24px;
    margin: 16px 8px;
    border-radius: 8px;
    @include for-mobile {
      padding: 16px;
      width: 100%;
    }

    &:first-child {
      width: 100%;
    }
  }
}

.skillset {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1em;
  }
  &__item {
    font-size: 0.8rem;
    width: calc(33% - 16px);
    max-width: 100px;
    text-align: center;
    margin: 16px 8px;

    @include for-mobile {
      width: 50%;
    }

    &--logo {
      display: flex;
      width: 80%;
      height: 80%;
      margin: auto;
      margin-bottom: 4px;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }
}

.fa__icon {
  margin-right: 1rem;
}
</style>
