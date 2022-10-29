<script setup lang="ts">
import "../assets/sharedHomePage.css";
import "../assets/rulebook.css";
</script>
<template>
  <div class="content-body align-center-start">
    <div class="">
      <div class="zuci-text features red-text">TAKING your TURN</div>
      <div class="paragraph">
        <span class="bold-text">First turn</span><br />
        Players can decide amongst themselves which team would go first.
      </div>
      <div class="paragraph">
        <span class="bold-text">In a turn, a team can:</span>
        <ul>
          <li>
            <div>
              <span class="bold-text">Village board action</span> <br />
              Pick up any card from the village board
            </div>
            <div class="grid-3">
              <div></div>
              <img src="@/images/choosevil.gif" alt="" class="image-class" />
              <div></div>
            </div>
          </li>
          <li>
            <div class="">
              <div>
                <span class="bold-text">Assembly board action</span>
                <div>
                  Move raw materials within the assembly board by two blocks.
                  This can be in either directions , but never diagonally.
                </div>
                <div class="bold-text">OR</div>
                <div>
                  Replace any raw material card with a new card from your
                  collected deck of raw materials.
                </div>
              </div>
              <div class="grid-2">
                <img src="@/images/jumpsteps.png" alt="" class="image-class" />
                <img src="@/images/replace.png" alt="" class="image-class" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="paragraph">
        Only apprentice will be allowed to make these moves physically. The
        captain can help the apprentice with feedback buttons from the
        application or through non-verbal mediums.
      </div>
      <div class="paragraph">
        <span class="bold-text">Correct Assembly</span><br />
        When you encounter a correct assembly, you must do the following to win
        the instrument:
        <ol>
          <li>The team Captain rings the bell</li>
          <li>
            The apprentice shouts out the name of the instrument. If the said
            name is correct, <span class="bold-text">CONGRATULATIONS</span>,
            your team just won the musical instrument
          </li>
        </ol>
        <div class="grid-3">
          <div></div>
          <img src="@/images/correctassembly.gif" alt="" class="image-class" />
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.grid-3 {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding-top: 10px;
  padding-bottom: 10px;
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
