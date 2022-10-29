<script setup lang="ts">
import RulebookComponent from "../components/RulebookComponent.vue";
</script>
<template>
  <div class="rule-content">
    <RulebookComponent />
  </div>
</template>

<style scoped>
.rule-content {
  display: grid;
  place-items: center;
  padding: 0 2rem;
  height: 100vh;
  background-image: url("@/images/bannersquare.png");
}
</style>
