<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  mounted() {
    this.$axios.get("/todos/1").then((res: any) => {
      console.log(res);
    });
  }
}
</script>
