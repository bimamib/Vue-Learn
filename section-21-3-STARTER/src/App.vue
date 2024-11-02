<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    const user = {
      name: "Harry",
      age: 20,
    };

    return {
      num,
      increment,
    };
  },
};
</script>
