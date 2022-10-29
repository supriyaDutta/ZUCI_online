<script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="name">
    <div class="name-center">
      <span class="big-size-text zuci-text red-text">ZUCI</span
      ><span class="normal-text bold-text">
        a MULTIPLAYER table top PHY-GITAL board game</span
      >
      <div class="grid-3">
        <div class="cell1">
          <div class="align-center">
            <span>
              <font-awesome-icon icon="fa-solid fa-users" />
              <span class="bold-text"> 4 Players</span>
            </span>
          </div>
        </div>
        <div class="cell2">
          <div class="align-center">
            <span>
              <font-awesome-icon icon="fa-solid fa-user" />
              <span class="bold-text"> 7+ years</span>
            </span>
          </div>
        </div>
        <div class="cell3">
          <div class="align-center">
            <span>
              <font-awesome-icon icon="fa-solid fa-hourglass-half" />
              <span class="bold-text"> 20 mins</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.name {
  padding-top: 10rem;
  padding-left: 10vw;
  padding-right: 10vw;
}
.name > .name-center {
  display: grid;
  place-items: center;
}
.name > .name-center > .big-size-text {
  font-size: 15vw;
}
.name > .name-center > .normal-text {
  font-size: 1.5vw;
}
.name > .name-center > .grid-3 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  padding-left: 15vw;
  padding-right: 15vw;
}
.name > .name-center > .grid-3 > .cell1 {
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
}
.name > .name-center > .grid-3 > .cell2 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
}
.name > .name-center > .grid-3 > .cell3 {
  grid-column: 3 / span 1;
  grid-row: 1 / span 1;
}
</style>
