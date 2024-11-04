<template>
  <div>
    <p>{{ num }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>

    <p>{{ name }}</p>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "App",
  setup() {
    let num = ref(0);

    function increment() {
      num.value++;
    }

    setTimeout(() => {
      user.name = "Potter";
    }, 3000);

    const user = reactive({
      name: "Harry",
      age: 20,
    });

    return {
      num,
      increment,
      ...toRefs(user),
    };
  },
};
</script>
