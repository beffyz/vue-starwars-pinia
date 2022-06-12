<template>
  <section class="film-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div
            class="film-section__card"
            v-for="film in getFilms"
            :key="film.id"
          >
            <div class="film-section__card--details">
              <h3>
                <span class="film-section__card--span">Title</span>
                {{ film.title }}
              </h3>
              <p>
                <span class="film-section__card--span">Episode №</span>
                {{ film.episode_id }}
              </p>
              <p>
                <span class="film-section__card--span">Release date</span>
                {{ film.release_date }}
              </p>
              <p>
                <span class="film-section__card--span">Director</span>
                {{ film.director }}
              </p>
              <p>
                <span class="film-section__card--span">Producer</span>
                {{ film.producer }}
              </p>
            </div>
            <div class="film-section__card--opening">
              {{ film.opening_crawl }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { useSearchedFilmsStore } from "@/store/SearchedFilms";

export default defineComponent({
  name: "FilmsComponent",
  created() {
    useSearchedFilmsStore().fetchFilms();
  },
  methods: {},
  computed: {
    ...mapState(useSearchedFilmsStore, ["getFilms"]),
  },
});
</script>

<style scoped lang="scss" src="./filmsComponent.scss" />
