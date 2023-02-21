<template>
  <div id="app">
    <HelloWorld msg="Hello Vue 2 + TypeScript + Vite" />
    <div>
      <h1>Todos</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/todo";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import { mapActions, mapGetters } from "vuex";
@Component({
  methods: {
    ...mapActions({
      getTodos: "TodoModule/getTodos",
    }),
  },
  computed: {
    ...mapGetters({
      todos: "TodoModule/todos",
    }),
  },
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  getTodos!: () => void;
  todos!: Todo[];
  mounted() {
    this.getTodos();
  }
}
</script>
