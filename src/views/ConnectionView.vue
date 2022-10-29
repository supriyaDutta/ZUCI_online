<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div></div>
    <div>
      <div class="zuci-text red-text features">COMMUNICATION within a TEAM</div>
      <div class="paragraph">
        Within a team, the captain uses the Zuci application and hence will
        possess all the information on assembling the raw materials to construct
        the Musical instruments. He/She/They have to help their apprentices to
        assemble and construct the instruments. The team members - captain and
        apprentice, cannot talk to one another. They can, however, communicate
        through any other non-verbal medium(you can dance, do dumb charades, use
        gestures, whatever floats your boat)
        <br />
        <br />
        
      </div>
      <br />
      <div class="">
        If you are the:
        <div class="paragraph">
          <span class="bold-text">Captain</span>
          <br />
          Only the captain uses the application Zuci. It has information on how
          to assemble the raw materials on the assembly board. As the captain
          you must:
          <ol>
            <li>
              Help the apprentice find correct raw material cards from the
              village board and arrange them on the assembly board. For example,
              if you see that Bamboo is needed to construct Dhul, help your
              apprentice find Bamboo from the village board, and help them make
              correct assembly on the assembly board.
              <div class="grid-2">
                <img
                  src="@/images/captainapprenticeVilboard.gif"
                  alt=""
                  class="image-class"
                />
                <img
                  src="@/images/captainapprentice1.png"
                  alt=""
                  class="image-class"
                />
              </div>
            </li>
            <li>
              The wrong or right button on the app can be used to indicate that
              the apprentice is either wrong or right.
            </li>
            <li>
              Use the bell button to notify of a correct assembly.
              <div class="grid-3 div-padding">
                <div></div>
                <img
                  src="@/images/buttons.jpg"
                  alt=""
                  class="image-class div-rounded"
                />
                <div></div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="">
        <div class="paragraph">
          <span class="bold-text">Apprentice</span>
          <br />
          Follow the lead of your captain. Look for raw materials in different
          spots of the village board.
          <ol>
            <li>
              Check to see if your captain approves of your selection and
              assemblies.
            </li>
            <li>
              Listen to the notifications given by the captain during wrong and
              right assemblies made.
            </li>
            <li>
              Whenever you hear the correct assembly bell, shout out its name to
              Win the musical instrument.
              <div class="grid-3">
                <div></div>
                <img
                  src="@/images/correctassembly.gif"
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
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
.div-rounded {
  border-radius: 15px;
}
.div-padding {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
