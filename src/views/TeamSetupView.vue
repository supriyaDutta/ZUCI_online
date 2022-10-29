<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div>
      <div class="features zuci-text red-text">TEAM SETUP</div>

      <div>
        <div class="paragraph">
          <div>
            <span class="bold-text">Teams</span><br />Players will play in teams
            of two. Divide yourself into groups of twos. Within each team, one
            person will take the role of a Captain and the other will be an
            apprentice.
            <div class="grid-2">
              <div>
                <img src="@/images/apprentice.png" alt="" class="image-class" />
              </div>
              <div>
                <img src="@/images/captain.png" alt="" class="image-class" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="paragraph">
        <span class="bold-text"> Seating arrangement</span> <br />
        Members of each team should seat opposite one another.
        <div class="grid-2">
          <div>
            <img src="@/images/teamsA.png" alt="" class="image-class" />
          </div>
          <div>
            <img src="@/images/teamsB.png" alt="" class="image-class" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  align-items: center;
}
</style>
