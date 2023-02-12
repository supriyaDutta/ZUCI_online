<script setup lang="ts">
import { RouterLink } from "vue-router";
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="fifth-section">
    <div class="">
      <h3 class="zuci-text title-text">Get the GAME</h3>
      <div class="grid-2">
        <div class="col1" id="downloads">
          <div class="features">Downloads</div>
          <div>
            Download all the printable physical components and the application
            <a
              href="https://github.com/supriyaDutta/ZUCI_downloads"
              target="_blank"
              >here</a
            >.
          </div>
        </div>
        <div class="col2" id="rulebook">
          <div class="features">RuleBook</div>
          <div>
            Ready to play <span class="bold-text">ZUCI</span> ? <br />
              <RouterLink to="/rulebook" class="green">
        Click here
      </RouterLink> to go through the rules.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fifth-section {
  margin-top: 10rem;
  margin-bottom: 10rem;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 15vw;
  padding-right: 15vw;
  background-color: var(--color-text);
  color: white;
  
  display: grid;
  align-items: center;
}
.fifth-section > div {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr;
}
@media only screen and (min-width: 551px) {
  .fifth-section > div > .grid-2 {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "downloads rulebook";
    grid-column-gap: 10px;
  }
}

@media only screen and (max-width: 550px) {
  .fifth-section > div > .grid-2 {
    padding-top: 3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "downloads" "rulebook";
    grid-row-gap: 10px;
  }
}
.fifth-section > div > .grid-2 > .col1 {
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;
}
.fifth-section > div > .grid-2 > .col2 {
  grid-column: 2 / span 1;
  grid-row: 1 / span 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 1fr;
}

#rulebook {
  grid-area: rulebook;
}

#downloads {
  grid-area: downloads;
}
.title-text {
  line-height: 1.2;
  font-size: 3rem;
}
</style>
