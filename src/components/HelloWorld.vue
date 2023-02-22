<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
interface Props {
  msg: string;
}
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String as PropType<Props["msg"]>,
      required: true,
    },
  },
  data() {
    return {
      count: 0 as number,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
});
</script>

<template>
  <div class="mt-10">
    <h1 class="mb-10 text-3xl font-extrabold text-black dark:text-white">
      {{ msg }}
    </h1>
    <div class="mb-10">
      <button @click="count++">count is: {{ count }}</button>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
