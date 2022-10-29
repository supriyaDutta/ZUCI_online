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
        <div>
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
  padding-top: 15rem;
  padding-bottom: 10rem;
}

.second-section > .grid-colrow36 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 5rem;
  margin: 0 auto;
  font-size: 20px;
}
.second-section > .grid-colrow36 > .cell-span2 {
  grid-column: 2 / span 4;
  grid-row: 1 / span 1;
}
.second-section > .grid-colrow36 > .cell-span2 > img {
  max-width: 100%;
}
.second-section > .grid-colrow36 > .cell-span61 {
  grid-column: 2 / span 4;
  grid-row: 2 / span 1;
  padding-left: 10vw;
  padding-right: 10vw;
}
.second-section > .grid-colrow36 > .cell-span61 > div {
  line-height: 1.5;
}
</style>
