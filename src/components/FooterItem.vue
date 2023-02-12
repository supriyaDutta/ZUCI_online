<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="footer-wrapper">
    <div class="first">
      <RouterLink to="/" class="white-text button"
        ><span class="ftext">Home</span></RouterLink
      >
    </div>

    <div class="right">
      <RouterLink to="/rulebook" class="white-text button">
        <span class="ftext">Rule Book</span>
      </RouterLink>

      <span></span>
      <a
        href="https://github.com/supriyaDutta/ZUCI_downloads"
        target="_blank"
        class="white-text button"
        ><span class="ftext">Download</span></a
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
}
.red-text {
  color: #f0474b;
}
.white-text {
  color: white;
}

.ftext {
  font-size: 1rem;
  font-weight: 600;
}
</style>
