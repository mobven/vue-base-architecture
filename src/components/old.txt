<template>
  <div>
    <h1>{{ msg }}</h1>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
      +
      <a
        href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
        target="_blank"
      >
        Vetur
      </a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Docs
      </a>
      |
      <a href="https://vuejs.org/" target="_blank">Vue 2 Docs</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <br /><br />
    <button type="button" @click="updateTheme">theme is {{ theme }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapActions, mapGetters } from "vuex";
@Component({
  methods: {
    ...mapActions({
      changeTheme: "ThemeModule/changeTheme",
    }),
  },
  computed: {
    ...mapGetters({
      theme: "ThemeModule/theme",
    }),
  },
})
export default class HelloWorld extends Vue {
  // Props
  @Prop({ type: String, required: true }) readonly msg!: string;

  // mapActions Types
  // eslint-disable-next-line no-unused-vars
  changeTheme!: (theme: string) => void;

  // mapGetters Types
  theme!: string;

  // data
  count: number = 0;

  //methods
  updateTheme() {
    this.changeTheme(this.theme === "dark" ? "light" : "dark");
  }
}
</script>

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
