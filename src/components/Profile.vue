<template>
  <div
    class="profile"
    id="profile"
  >
    <h2>PROFILE</h2>
    <div class="profile__container">
      <div class="profile__about-me profile__item">
        <div class="about-me__item">
          <h3>
            <FontAwesomeIcon
              class="fa__icon"
              icon="pen"
            />NAME</h3>
          <p>和田 真理菜 - Marina Wada</p>
        </div>
        <div class="about-me__item">
          <h3>
            <FontAwesomeIcon
              class="fa__icon"
              icon="ghost"
            />HN</h3>
          <p>あとぜ - Atoze</p>
        </div>
        <div class="about-me__item">
          <h3>
            <FontAwesomeIcon
              class="fa__icon"
              icon="birthday-cake"
            />Birthday</h3>
          <p>1995-02-23</p>
        </div>
        <div class="about-me__item">
          <h3>
            <FontAwesomeIcon
              class="fa__icon"
              icon="search"
            />Interest</h3>
          <p>
            UIやUXに興味を持っております。<br />
            様々なコンテンツをクリエイティブ＆システマチックに表現していきたいと思います。
          </p>
        </div>
      </div>
      <div class="profile__biography profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="book"
          />BIOGRAPHY</h3>
        <ul class="biography__list list">
          <li>
            <dl>
              <dt class="biography__item--title">2020</dt>
              <dd class="biography__item list__item">都内のシステム開発会社にフロントエンド開発として所属</dd>
              <dd class="biography__item list__item">Vueにて会場案内・検索システム（BtoC）の開発にアサイン</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt class="biography__item--title">2019</dt>
              <dd class="biography__item list__item">ヘッドレスCMSの開発・パッケージ化にアサイン</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt class="biography__item--title">2018</dt>
              <dd class="biography__item list__item">都内のシステム開発会社にシステムエンジニアとして所属</dd>
              <dd class="biography__item list__item">Angularを利用した店舗管理、会計システムの次期バージョンアップ（BtoB）の開発にアサイン</dd>
            </dl>
          </li>
        </ul>
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
        <ul class="likes__list li">
          <li class="likes__item list__item">創作活動</li>
          <li class="likes__item list__item">🐤</li>
          <li class="likes__item list__item">🎮</li>
          <li class="likes__item list__item">趣味で絵を描いたりしています🎨</li>
        </ul>
      </div>
      <div class="profile__links profile__item">
        <h3>
          <FontAwesomeIcon
            class="fa__icon"
            icon="globe"
          />LINK</h3>

        <div class="links__list">
          <div class="links__item">
            <a
              class="links__item--icon"
              href="https://github.com/atoze"
            >
              <FontAwesomeIcon :icon="['fab','github']" />
            </a>
          </div>
          <div class="links__item">
            <router-link
              to="#contact"
              class="links__item--icon"
            >
              <FontAwesomeIcon icon="envelope" />
            </router-link>
          </div>
        </div>
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

.profile__about-me {
  display: flex;
  flex-wrap: wrap;
}
.about-me {
  &__item {
    min-width: calc(33% - 24px);
    margin: 0 12px;
  }
}

.skillset {
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1clem;
  }
  &__item {
    font-size: 0.8rem;
    width: calc(33% - 16px);
    min-width: 40px;
    max-width: 60px;
    text-align: center;
    margin: 0 8px 16px;

    @include for-mobile {
      width: 50%;
    }

    &--logo {
      display: flex;
      flex: 1 0 80%;
      width: 80%;
      height: 80%;
      max-height: 60px;
      margin: auto;
      margin-bottom: 4px;
      img {
        flex: 1 0 100%;
        max-width: 100%;
        max-height: 100%;
        margin: auto;
      }
    }
  }
}

.biography {
  &__item {
    &--title {
      font-weight: bold;
    }
  }
}

.likes {
  &__item {
    position: relative;
    &:last-child::after {
      content: "etc...";
      display: block;
      position: relative;
      text-align: right;
      margin-right: 20px;
    }
  }
}

.links {
  &__list {
    display: flex;
    width: 80%;
    margin: auto;
    text-align: center;
  }
  &__item {
    flex: 1;
    &--icon {
      font-size: 3rem;
    }
  }
}

.list {
  &__item {
    display: list-item;
    list-style-type: circle;
    margin-left: 1.6rem;
  }
}

.fa__icon {
  margin-right: 1rem;
}
</style>
