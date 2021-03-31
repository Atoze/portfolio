<template>
  <label class="app-input__label" :for="props.id">{{ props.label }}<template v-if="props.required">*</template>
    <input
      class="app-input"
      :id="props.id"
      :type="props.type"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :required="props.required"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </label>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
  props: {
    id: String,
    type: String,
    label: String,
    
    placeholder: String,
    disabled: Boolean,
    required: Boolean,
    modelValue: [String, Number]
  },
  setup(props){
    return { props }
  }
});
</script>

<style lang="scss" scoped>
  .app-input {
    width: calc(100% - 18px);
    height: 32px;
    margin: 0.2em 0;
    padding: 4px 8px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fafafa;
    line-height: 1.6rem;
  }
</style>