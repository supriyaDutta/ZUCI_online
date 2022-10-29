<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div>
      <div>
        <div class="zuci-text red-text features">Using POWER CARDS</div>
        <div class="paragraph">
          Power cards can be used at any time of the play. You can attack your
          opponents at any time using your power cards.
          <div class="grid-2">
            <img src="@/images/powercard01.png" alt="" class="image-class" />
            <img src="@/images/powercard02.png" alt="" class="image-class" />
          </div>
        </div>
        <div class="paragraph">
          <span class="bold-text"> Red marks impact volume points:</span><br />
          If your team receives any of the red marked cards from your opponent
          team, do the following:<br />
          <ol>
            <li>Go to Captain’s notes</li>
            <li>Click on volume button(red)</li>
            <li>Enter the code and press verify.</li>
          </ol>
          <div class="grid-3 div-padding">
            <div>
              <img
                src="@/images/powercards-36.png"
                alt=""
                class="image-class"
              />
            </div>
            <div>
              <video class="video-class div-rounded" controls>
                <source src="@/videos/powercards1.mp4" type="video/mp4" />
              </video>
            </div>
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

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 20px;
  place-items: center;
}
.div-rounded {
  border-radius: 15px;
}
.div-padding {
  margin-top: 10px;
  margin-bottom: 10px;
}
.video-class {
  max-width: 100%;
  height: auto;
}
.grid-002 {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-column-gap: 20px;
  align-items: center;
}
</style>
