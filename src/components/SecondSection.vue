<script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="second-section">
    <div class="grid-colrow36">
      <div class="cell-span2 align-center-start">
        <img src="@/images/all_process.gif" class="image-content" />
      </div>

      <div class="cell-span61 align-center-start">
        <div class="text-align-center">
          You
          <span class="red-text features zuci-text"> EXPLORE</span>
          – travel through communities and their festivals, <br />You
          <span class="red-text features zuci-text"> CREATE</span>
          – join festivities by constructing and playing Folk musical
          instruments, <br />You
          <span class="red-text features zuci-text"> DUMP</span>
          your opponents in worms, sometimes help them(for more points),
          <br />get attacked, you repay <br />and most important of all –
          <span class="red-text features zuci-text"> ENJOY !</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.second-section {
  padding-top: 5vh;
  padding-bottom: 5vh;
  padding-left: auto;
  padding-right: auto;
}

.second-section > .grid-colrow36 {
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  grid-template-rows: 0.2fr 1fr;
  margin: 0 auto;
  font-size: 15px;
  place-items: center;
}
.second-section > .grid-colrow36 > .cell-span2 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}
.second-section > .grid-colrow36 > .cell-span2 > img {
  max-width: 100%;
  height: auto;
}
.second-section > .grid-colrow36 > .cell-span61 {
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  padding-top: 0;
  padding-bottom: 0;
}
.second-section > .grid-colrow36 > .cell-span61 > div {
  font-size: 20px;
}
</style>
