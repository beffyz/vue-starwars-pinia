<template>
  <section>
    <h1 class="films-view center-md">AVAILABLE STAR WARS MOVIES</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="center-md">
            <h4 class="films-view__filter--title">Filter by:</h4>
            <select
              class="films-view__filter--select center-md"
              @change="filterHandler($event.target.value)"
              name="filterOptions"
              id="filterOptions"
            >
              <option class="films-view__filter--option" value="filterById">
                Id
              </option>
              <option
                class="films-view__filter--option"
                value="filterByReleaseDate"
              >
                Release Date
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <FilmsComponent />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSearchedFilmsStore } from "@/store/SearchedFilms";

import FilmsComponent from "@/components/FilmsComponent/FilmsComponent.vue";
export default defineComponent({
  name: "FilmsView",
  components: { FilmsComponent },
  methods: {
    filterHandler(option: string) {
      if (option === "filterById") {
        this.filterById();
      } else if (option === "filterByReleaseDate") {
        this.filterByReleaseDate();
      }
    },
    filterByReleaseDate() {
      useSearchedFilmsStore().filterByReleaseDate();
    },
    filterById() {
      useSearchedFilmsStore().filterById();
    },
  },
});
</script>

<style scoped>
.films-view {
  font-family: starwars;
  padding-top: 50px;
  padding-bottom: 30px;
  color: #ffffff;
  font-size: 75px;
  user-select: none;
}

.films-view:hover {
  color: gold;
  font-size: 80px;
}

.films-view__filter--title {
  color: #ffffff;
}

.films-view__filter--select {
  border: none;
  background-color: transparent;
  color: #ffffff;
}

.films-view__filter--option {
  color: black;
}
</style>
