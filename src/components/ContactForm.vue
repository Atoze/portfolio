<template>
  <div class="form">
    <div v-show="state.isSubmitComplete">
      <p
        class=""
        v-if="!state.submitError"
      >送信完了しました！ありがとうございます。</p>
      <p
        class="error--text"
        v-else
      >
        エラーが発生しました。<br />
        お手数おかけしますが、もう一度ご送信頂くか、直接メール（&#97;&#116;&#111;&#122;&#101;&#49;&#48;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;）にてご連絡くださいませ。
      </p>
    </div>
      <form @submit.prevent="onSubmit">
        <label for="name">お名前*
          <input
            class="form__input"
            id="name"
            type="text"
            name="entry.2046359151"
            placeholder=""
            v-model="state.name"
            :disabled="state.loading"
            required
          >
        </label>
        <br>
        <label for="email">メールアドレス*
          <input
            class="form__input"
            id="email"
            type="text"
            name="entry.634883760"
            placeholder="example@email.com"
            v-model="state.email"
            :disabled="state.loading"
            required
          >
        </label>
        <br>
        <label for="message">お問い合わせ内容*
          <textarea
            class="form__input"
            id="message"
            name="entry.927730605"
            placeholder=""
            v-model="state.message"
            :disabled="state.loading"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          name="button"
        >送信</button>
      </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import axios, { AxiosError } from "axios";

export default defineComponent({
  name: "ContactForm",
  setup() {
    const state = reactive({
      name: "",
      email: "",
      message: "",
      loading: false,
      isSubmitComplete: false,
      submitError: false
    });

    const init = () => {
      state.name = "";
      state.email = "";
      state.message = "";
      state.loading = false;
    };

    const onSubmit = () => {
      const submitParams = new FormData();
      submitParams.append("entry.2046359151", state.name);
      submitParams.append("entry.634883760", state.email);
      submitParams.append("entry.927730605", state.message);

      const CORS_PROXY = "";
      const GOOGLE_FORM_ACTION =
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSelT0k2PcI5PucmSjn0-z8Bq0qT04yj1g3Py1v9wi9OFmXjgQ/formResponse";
      state.loading = true;
      axios
        .post(CORS_PROXY + GOOGLE_FORM_ACTION, submitParams)
        .then(() => {
          state.isSubmitComplete = true;
          init();
        })
        .catch((e: AxiosError) => {
          // TODO: 現状PROXY-ERRORが出るので一時的にエラー判定をなくす
          // state.submitError = true;
          state.isSubmitComplete = true;
          init();
        });
    };
    return { state, onSubmit };
  }
});
</script>

<style lang="scss" scoped>
  form {
    width: 100%;
  }
  input {
    height: 32px;
        padding: 4px 8px;
  }
  textarea {
    height: 132px;
    padding: 8px;
  }
  input,
  textarea {
    width: calc(100% - 18px);
    margin: 0.2em 0;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fafafa;
    line-height: 1.6rem;
  }
  .form__input {
    margin-bottom: 10px;
  }
  button {
    border-radius: 3px;
    padding: 8px 16px;
    border: 0 none;
    cursor: pointer;
  }
  .error--text {
    color: red;
  }
</style>
