<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getObj } from "@otts/utils";
export default defineComponent({
  name: "Home",
  components: {},
  mounted() {
    const obj = { a: 33 };
    const cloneObj = getObj(obj, {
      b: "a",
    });
    console.log(cloneObj);
  },
});
</script>
