<script setup lang="ts"></script>
<template>
  <div class="">
    <div class="mainApp">
      <header>
        <div class="">
          <div class="align-center">
            <!-- <div class="intro-line"> something about ZUCI</div> -->
            <nav class="">
              <RouterLink to="/rulebook">Introduction</RouterLink>
              <RouterLink to="/preparation">Preparation</RouterLink>
              <RouterLink to="/Teamsetup"> Team Setup</RouterLink>
              <RouterLink to="/Resourcesetup"> Resources Setup</RouterLink>
              <RouterLink to="/usingZuci"> Using Zuci</RouterLink>
              <RouterLink to="/connection">Connection within a team</RouterLink>
              <RouterLink to="/play">It's your turn</RouterLink>
              <RouterLink to="/powers">Using powers</RouterLink>
              <RouterLink to="/win">Winning</RouterLink>
              <!-- <RouterLink to="/strategies">Strategies to WIN</RouterLink> -->
            </nav>
          </div>
        </div>
      </header>
      <div class="routerview-class"><RouterView /></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
nav {
  position: fixed;
  top: 30px;
  font-size: 16px;

  margin-bottom: 30px;
  width: 75vw;
  padding: 1rem;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-size: 1.25rem;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: 700;
}

nav a:first-of-type {
  border: 0;
}
.mainApp {
  width: 75vw;
  height: 80vh;
  margin-right: auto;
  margin-left: auto;
}
.routerview-class {
  margin-top: calc(76px + 1rem);
  height: 90%;
  background: rgb(255, 255, 255, 0.9);
  border-radius: 5px;
  overflow: auto;
}
</style>
