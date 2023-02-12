<script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="third-section">
    <div class="grid-colrow21">
      <div class="cell-colrow12" id="image">
        <img src="@/images/arrangecards.png" alt="" />
      </div>
      <div class="cell-span2 align-center-start" id="description">
        <div class="">
          <span class="big-size-text"
            ><span class="bold-text zuci-text zuci-text-style"> PHY-GITAL</span>
            game components</span
          >
          <br /><br />
          <span
            ><span class="bold-text zuci-text">PHY</span>sical components</span
          >
          <ul>
            <li>Village Board</li>
            <li>Assembly Board</li>

            <li>Raw materials Cards</li>
            <li>Power Cards</li>
          </ul>
          <span
            >Di<span class="bold-text zuci-text"> GITAL</span> component</span
          >
          <ul>
            <li>ZUCI app</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.third-section {
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 1vw;
  padding-right: 5vw;
  background-color: #f0474b;
}

@media only screen and (min-width: 551px) {
  .third-section > .grid-colrow21 {
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "image image description";
    grid-column-gap: 10px;
    margin: 0 auto;
  }
}

.third-section > .grid-colrow21 > #description {
  grid-area: description;
  color: white;
}
.third-section > .grid-colrow21 > .cell-span2 > div {
  padding-left: 2em;
  border-left: 0.2em solid white;
}

.third-section > .grid-colrow21 > #image {
  grid-area: image;
  padding-right: 2em;
}

.third-section > .grid-colrow21 > .cell-colrow12 > img {
  max-width: 100%;
  height: auto;
}

@media only screen and (max-width: 550px) {
  .third-section > .grid-colrow21 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:0.5fr 1fr;
    grid-template-areas:
      "image"
      "description";
    grid-column-gap: 10px;
    margin: 0 auto;
  }
  .third-section > .grid-colrow21 > .cell-span2 > div {
    border-left: 0;
  }

  .third-section > .grid-colrow21 > #image {
    grid-area: image;
    padding-right: 0;
  }
}
</style>
