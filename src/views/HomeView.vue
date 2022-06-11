<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-12 center-md">
          <div class="home-view__image">
            <img width="400" src="../assets/images/starw.png" alt="logo" />
          </div>
          <p>
            Star Wars is a multi-genre mythology and multimedia franchise
            created by George Lucas in 1976. Comprising movies, novels, comics,
            video games, toys, and numerous television series, the Star Wars
            franchise employs archetypal motifs common to religions, classical
            mythology, and political climax, as well as musical motifs of those
            same aspects. As one of the foremost examples of the space opera
            subgenre of science fiction, Star Wars has become part of mainstream
            popular culture, as well as being one of the highest-grossing series
            of all time.[1] In 2012, The Walt Disney Company bought the rights
            to the franchise from George Lucas for 4.05 billion dollars. Since
            then, Disney has split off Star Wars into two main categories, those
            being Star Wars Legends and Star Wars Canon, with Canon being the
            "official" story of the franchise. Despite the mainline story of the
            franchise, officially known as the Skywalker Saga, reaching its
            conclusion in 2019 with the release of Star Wars: Episode IX The
            Rise of Skywalker, the franchise is still going strong, mainly due
            to the success of the Disney+ original television series The
            Mandalorian, the final season of Star Wars: The Clone Wars and
            publishing projects such as Star Wars: The High Republic.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>

<style scoped>
p {
  color: white;
}

.home-view__image {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
