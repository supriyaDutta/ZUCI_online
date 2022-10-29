<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div>
      <div>
        <div class="zuci-text features red-text">ZUCI APPLICATION</div>
        <div class="paragraph">
          Only the captain of each team uses the Zuci app. As the captain, you
          are forbidden to show the contents of Zuci to your apprentice.
          <div class="grid-3">
            <div></div>
            <img src="@/images/notalking.gif" alt="" class="image-class" />
            <div></div>
          </div>
        </div>
        <div class="paragraph">
          <span class="bold-text"> Using Zuci</span><br />
          <ol>
            <li>
              The app - ZUCI starts with your assignment for the game. You will
              see the screen as shown below, where you will be asked to
              construct folk musical instruments.
              <div class="grid-3 div-padding">
                <div></div>
                <img
                  src="@/images/assignment_screen.png"
                  alt=""
                  class="image-class"
                />
                <div></div>
              </div>
            </li>
            <li>
              <span class="bold-text">Raw materials setup</span>: Place your raw
              materials to their locations on the village board as shown on Zuci
              <div class="grid-3">
                <div></div>
                <div class="div-padding">
                  <img
                    src="@/images/setupVillage.gif"
                    alt=""
                    class="image-class div-rounded"
                  />
                </div>
                <div></div>
              </div>
            </li>
            <li>
              Once the game starts, you will be directed to a screen called
              <span class="bold-text red-text">Captain's Notes</span>. This will
              show the instruments you will construct on your assignment and the
              raw materials needed for it. Work as a team and help each other to
              gather, assemble and construct your musical instruments.
              <div class="grid-3 div-padding">
                <div></div>
                <img
                  src="@/images/CaptainNotesScreen.png"
                  alt=""
                  class="image-class"
                />
                <div></div>
              </div>
            </li>
          </ol>
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
}
.div-rounded {
  border-radius: 15px;
}
.div-padding {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
