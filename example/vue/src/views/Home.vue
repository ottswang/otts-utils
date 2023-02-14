<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { deepClone } from "@maybecode/js-utils";
export default defineComponent({
  name: "Home",
  components: {},
  mounted() {
    const obj = { a: [{ b: 2 }] };
    const cloneObj = deepClone(obj);
    console.log(cloneObj);
  },
});
</script>
