<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="footer-wrapper">
    <div class="first">
      <RouterLink to="/" class="button white-text">Home</RouterLink>
    </div>

    <div class="right">
      <RouterLink to="/rulebook" class="button white-text">
        Rule Book
      </RouterLink>

      <span></span>
      <a
        href="https://github.com/supriyaDutta/ZUCI_downloads"
        target="_blank"
        class="button white-text"
        >Download</a
      >
    </div>
  </div>
</template>

<style>
.footer-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 5px;
  padding-bottom: 5px;
}
.first {
  float: left;
}
.right {
  float: right;
}
.button {
  padding-left: 10px;
  padding-right: 10px;
  font-size: 17x;
  font-weight: bold;
}
.red-text {
  color: #f0474b;
}
.white-text {
  color: white;
}
</style>
