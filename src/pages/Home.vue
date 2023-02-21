<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HelloWorld,
  },
  methods: {
    ...mapActions({
      getTodos: "todo/getTodos",
    }),
  },
  mounted() {
    this.getTodos();
  },
});
</script>

<style lang="scss">
body {
  background-color: $lily-white;
}
</style>
