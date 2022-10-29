<script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div class="section">
      <!-- <div class="sub-header">Overview</div> -->
      <!-- <div class=""> -->
      <div class="paragraph">
        <div>
          <span class="red-text features align-center">
            The team who creates all the instruments first, WINS!!</span
          >
        </div>
      </div>
      <div class="grid-3">
        <div></div>
        <img src="@/images/winGif.gif" alt="" class="image-class" />
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
</style>
