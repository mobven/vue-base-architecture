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
  <div class="bg-red-50">
    <h1>{{ msg }}</h1>
    <div>
      <p>
        Recommended IDE setup:
        <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
        +
        <a href="https://github.com/johnsoncodehk/volar" target="_blank"
          >Volar</a
        >
      </p>

      <p>See <code>README.md</code> for more information.</p>

      <p>
        <a href="https://vitejs.dev/guide/features.html" target="_blank">
          Vite Docs
        </a>
        |
        <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
      </p>
    </div>

    <div>
      <button type="button" @click="count++">count is: {{ count }}</button>
    </div>
    <div>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test hot module replacement.
      </p>
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
