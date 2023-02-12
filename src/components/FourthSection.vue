<script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="fourth-section">
    <div class="grid-colrow28">
      <div class="left" id="left1">
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
      <div class="cell-image" id="right1">
        <img src="@/images/mixingrm.gif" />
      </div>
      <div class="cell-image" id="left2">
        <img src="@/images/teams.png" />
      </div>
      <div class="right" id="right2">
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
      <div class="left" id="left3">
        <div>
          <span class="large-text red-text zuci-text">WINNER</span>
          <br />
          The team to construct all the folk musical instruments first, WINS!
        </div>
      </div>
      <div class="cell-image" id="right3">
        <img src="@/images/4playerswintransparent.png" alt="" />
      </div>
      <div class="cell-image" id="left4">
        <img src="@/images/cards3.png" alt="" />
      </div>
      <div class="right" id="right4">
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

@media only screen and (min-width: 551px) {
  .fourth-section > .grid-colrow28 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-areas:
      "left1 right1"
      "left2 right2"
      "left3 right3"
      "left4 right4";
    grid-column-gap: 4rem;
    grid-row-gap: 4rem;
    padding-top: 10rem;
    margin: 0 auto;
    padding-left: auto;
    padding-right: auto;
  }
}

#left1 {
  grid-area: left1;
  display: grid;
  place-items: center;
}
#left2 {
  grid-area: left2;
  display: grid;
  place-items: center;
}
#left3 {
  grid-area: left3;
  display: grid;
  place-items: center;
}
#left4 {
  grid-area: left4;
  display: grid;
  place-items: center;
}

#right1 {
  grid-area: right1;
  display: grid;
  place-items: center;
}
#right2 {
  grid-area: right2;
  display: grid;
  place-items: center;
}
#right3 {
  grid-area: right3;
  display: grid;
  place-items: center;
}
#right4 {
  grid-area: right4;
  display: grid;
  place-items: center;
}

.cell-image > img {
  max-width: 100%;
  height: auto;
}

@media only screen and (max-width: 550px) {
  .fourth-section > .grid-colrow28 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-areas:
      "left1"
      "right1"
      "right2"
      "left2"
      "left3"
      "right3"
      "right4"
      "left4"
    ;
    grid-row-gap: 4rem;
    /*margin: 0 auto;*/
    padding-top: 10rem;
    padding-left: auto;
    padding-right: auto;
  }
}
</style>
