<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div>
      <div>
        <div class="features red-text zuci-text">RESOURCES SETUP</div>
        <div class="paragraph">
          <span class="bold-text"> Physical setup</span><br />
          <div class="image-padding">
            <img src="@/images/physicalsetup.png" alt="" class="image-class" />
          </div>
          <ol>
            <li>
              Lay out the village board and assembly board one next to the
              other.
            </li>
            <li>
              Line the Instrument cards, power cards and raw material cards or
              stack them together and set them aside.
            </li>
            <li>
              Shuffle the power cards and distribute 4 cards to each team.
            </li>
          </ol>
        </div>
        <div class="paragraph">
          <span class="bold-text"> Application setup</span><br />
          On your downloaded application - Zuci, you will find your assignments.
          It will also help you do one last setup before the game begins.
          <div class="grid-3">
            <div></div>
            <img src="@/images/firstscreen.png" alt="" class="image-class" />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 20px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.image-padding {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
