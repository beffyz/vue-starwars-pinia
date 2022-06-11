<template>
  <StarWardsHeader />
  <section class="app-content">
    <router-view />
  </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
}

.app-content {
  background-image: url("./assets/images/background-template.jpg");
  min-height: 50em;
}
</style>

<script>
import StarWardsHeader from "@/components/StarWarsHeader/StarWarsHeader";
export default {
  components: { StarWardsHeader },
};
</script>
