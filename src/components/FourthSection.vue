<script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="fourth-section">
    <div class="grid-colrow28">
      <div class="cell-left">
        <div>
          <span class="bold-text">
            <span class="large-text zuci-text red-text">Construct</span>
            <br />
            Folk musical instruments
          </span>
          <br />
          Explore different villages of North East India and as they prepare for
          their festivals. Land a hand as they construct their folk musical
          instruments by gathering and assembling raw materials together.
        </div>
      </div>
      <div class="cell-right">
        <img src="@/images/mixingrm.gif" />
      </div>
      <div class="cell-left">
        <img src="@/images/teams.png" />
      </div>
      <div class="cell-right">
        <div>
          <span class="bold-text">
            A team of
            <br />
            <span class="large-text red-text zuci-text">TWO</span>
          </span>
          <br />
          Play in teams of two as a captain and the apprentice. Play as the all
          knowledgeable captain, or be the apprentice and explore and collect
          raw materials for your musical instruments.
        </div>
      </div>
      <div class="cell-left">
        <div>
          <span class="large-text red-text zuci-text">WINNER</span>
          <br />
          The team to construct all the folk musical instruments first, WINS!
        </div>
      </div>
      <div class="cell-right">
        <img src="@/images/4playerswintransparent.png" alt="" />
      </div>
      <div class="cell-left">
        <img src="@/images/cards3.png" alt="" />
      </div>
      <div class="cell-right">
        <div>
          <span class="large-text red-text zuci-text">Powers</span>
          <br />
          Create more instruments, Spoil your opponents’ instruments, and create
          complex actions with Power cards. Work together with your team-mate,
          develop strategies to create your instruments and secure a place in
          the music studio.
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fourth-section {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 15vw;
  padding-right: 15vw;
}

.fourth-section > .grid-colrow28 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
  margin: 0 auto;
  padding-top: 10rem;
}

.fourth-section > .grid-colrow28 > .cell-left {
  grid-column: 1 / span 1;
  display: grid;
  place-items: center;
}
.fourth-section > .grid-colrow28 > .cell-right {
  grid-column: 2 / span 1;
  display: grid;
  place-items: center;
}

.fourth-section > .grid-colrow28 > .cell-left > img {
  max-width: 100%;
  height: auto;
}
.fourth-section > .grid-colrow28 > .cell-right > img {
  max-width: 100%;
  height: auto;
}
</style>
