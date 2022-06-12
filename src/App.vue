<template>
  <StarWardsHeader />
  <section class="app-content">
    <router-view />
  </section>
</template>

<script lang="ts">
import StarWardsHeader from "@/components/StarWarsHeader/StarWarsHeader.vue";
export default {
  components: { StarWardsHeader },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.app-content {
  background-image: url("./assets/images/asd.gif");
  min-height: 50em;
}

#app {
  font-family: "Montserrat", sans-serif;
}
</style>
