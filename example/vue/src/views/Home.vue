<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defaultTo,defaultToUndef } from "@otts/utils";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  mounted() {
    const arr: Array<any> = [];
    console.log(defaultTo(arr,()=>([])));
    console.log(defaultTo(undefined));
    console.log(defaultTo(NaN));
    console.log(defaultToUndef(NaN));
    
  },
});
</script>
