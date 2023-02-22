<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
interface Props {
  text: string;
  type: string;
  disabled: boolean;
  onClick: () => void;
}

export default defineComponent({
  name: "ButtonComponent",
  props: {
    text: {
      type: String as PropType<Props["text"]>,
      required: true,
    },
    type: {
      type: String as PropType<Props["type"]>,
      required: true,
    },
    disabled: {
      type: Boolean as PropType<Props["disabled"]>,
      required: true,
    },
    onClick: {
      type: Function as PropType<Props["onClick"]>,
      required: true,
    },
  },
});
</script>
<template>
  <button type="button" :class="type" :disabled="disabled" @click="onClick">
    {{ text }}
  </button>
</template>
