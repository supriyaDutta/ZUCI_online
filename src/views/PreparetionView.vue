<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div>
      <div>
        <div class="features zuci-text red-text">PREPARATIONS</div>
        <div class="paragraph">
          Before the game begins, we will need a few resources. Please visit
          here to download them all.
          <ul>
            <li>
              <span class="bold-text"> Physical resources</span>: These are to
              be
              <a
                href="https://github.com/supriyaDutta/ZUCI_downloads"
                target="_blank"
                >downloaded and printed</a
              >.
              <ol>
                <li>Village Board</li>
                <li>Assembly Board</li>
                <li>Raw material cards</li>
                <li>Power cards</li>
                <li>Instrument cards</li>
              </ol>
            </li>
            <li>
              <span class="bold-text"> Digital resource</span>: This is the Zuci
              android application.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  grid-column-gap: 20px;
  align-items: center;
}
</style>
