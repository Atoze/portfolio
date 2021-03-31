<template>
  <label class="app-textarea__label" :for="props.id">{{ props.label }}<template v-if="props.required">*</template>
    <textarea
      class="app-textarea"
      :id="props.id"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :required="props.required"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </label>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppTextarea",
  props: {
    id: String,
    label: String,
    placeholder: String,
    disabled: Boolean,
    required: Boolean,
    modelValue: String,
  },
  setup(props){
    return { props }
  }
});
</script>

<style lang="scss" scoped>
  .app-textarea {
    width: calc(100% - 18px);
    height: 132px;
    margin: 0.2em 0;
    padding: 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fafafa;
    line-height: 1.6rem;
  }
</style>