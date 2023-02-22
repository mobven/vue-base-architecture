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

<template>
  <div id="app">
    <div class="wrapper fixed w-full h-full top-0 bg-white dark:bg-black">
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite Edit" />
      <button @click="updateTheme">
        💡 Change Theme : {{ currentTheme.toUpperCase() }}
      </button>
    </div>
  </div>
</template>

<style lang="scss"></style>
