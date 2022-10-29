<!-- <script setup lang="ts">
import "../assets/sharedHomePage.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div class="section">
      <div class="sub-header">Strategies to win:</div>
      <div>Use special cards to win over your opponents.</div>
      <ul>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-02.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">Exchange: </span> Exchange any one of your
              card with your opponent [spend volume points: 3]
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">Worm:</span> Infect your opponent's
              already constructed instrument with worms, they have to return
              their instrument if they don't have worm repellent.[spend volume
              points:: 5]
            </div>
            <div>
              <img
                src="@/images/powercards-03.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-04.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">Worm repellent:</span> Kill the worms with
              worm repellent spray. [spend volume points: 5]
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">Send back to source:</span> Send any of
              the opponent's raw material back to their source.[spend volume
              points: 3]
            </div>
            <div>
              <img
                src="@/images/powercards-05.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-06.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">Choose your raw material: </span> Choose
              any one raw material of your choice[spend volume points: 5]
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">No Help:</span> Stop Captain from helping
              Apprentice[spend volume points: 5]
            </div>
            <div>
              <img
                src="@/images/powercards-07.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-08.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">No Sound:</span> Your opponent can't use
              any audio clues[spend volume points:
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">Decrease volume points by 7:</span>
              Decrease opponent's volume by 7.[spend volume points: 3]
            </div>
            <div>
              <img
                src="@/images/powercards-09.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-10.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">Increase volume points by 5:</span>
              Increase your volume by 5[earn volume
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">Increase volume points to 15:</span>
              Increase your volume to 15 if you have less[earn volume points:
              15]
            </div>
            <div>
              <img
                src="@/images/powercards-11.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-12.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">Hints:</span> Apprentice can verbally ask
              Captain about one raw material of any instrument
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">Teleport to other location:</span> move
              any raw material on the board to any location[spend volume points:
              4]
            </div>
            <div>
              <img
                src="@/images/powercards-13.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="grid-12">
            <div>
              <img
                src="@/images/powercards-14.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
            <div>
              <span class="bold-text">Help:</span> Help opponent to choose one
              raw material for one instrument[earn volume points: 15]
            </div>
          </div>
        </div>
        <div>
          <div class="grid-21">
            <div>
              <span class="bold-text">Share volume points:</span> Share volume
              points with opponent. Subtract the number of points from your
              volume point and your opponent can increase volume points.[earn
              volume points: 30]
            </div>
            <div>
              <img
                src="@/images/powercards-15.png"
                alt=""
                class="image-class image-class-shadow"
              />
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="scss">
.grid-12 {
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  grid-column-gap: 50px;
  place-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.grid-21 {
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-column-gap: 50px;
  place-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.image-class-shadow {
  box-shadow: 10px 10px 5px #ccc;
  -moz-box-shadow: 10px 10px 5px #ccc;
  -webkit-box-shadow: 10px 10px 5px #ccc;
  -khtml-box-shadow: 10px 10px 5px #ccc;
}
</style> -->
