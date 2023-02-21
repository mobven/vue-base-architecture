<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
    <button @click="updateTheme">Change Theme : {{ currentTheme }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters({
      theme: "theme/getTheme",
    }),
    currentTheme() {
      return this.theme();
    },
  },
  methods: {
    ...mapActions({
      getTodos: "todo/fetchTodos",
      changeTheme: "theme/changeTheme",
    }),
    updateTheme() {
      this.changeTheme(this.currentTheme === "light" ? "dark" : "light");
    },
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
