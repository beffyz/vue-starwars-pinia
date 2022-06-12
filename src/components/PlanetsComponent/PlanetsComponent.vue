<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 center-md">
        <div class="planets" v-for="planet in getPlanets" :key="planet.name">
          <h1 class="planets__title">Planet</h1>
          <h4>{{ planet.name }}</h4>
          <button @click="() => (selectedPlanet = planet)">
            Planet Preview
          </button>
        </div>
        <div class="planets__move-box">
          <button
            class="planets__move-button"
            :disabled="this.page === 1"
            @click="this.page--"
          >
            {{ "<" }}
          </button>
          <button
            class="planets__move-button"
            :disabled="this.page === 6"
            @click="this.page++"
          >
            {{ ">" }}
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <PlanetComponent
          v-if="selectedPlanet.diameter !== 1000"
          :planet-width="`width:${selectedPlanet.diameter / 25}px`"
          :planet-height="`height:${selectedPlanet.diameter / 25}px`"
          :planet-background="selectedPlanet.terrain"
          :planet-population="parseInt(selectedPlanet.population)"
          :planet-water="selectedPlanet.surface_water"
          :planet-name="selectedPlanet.name"
          :planet-terrain="selectedPlanet.terrain"
          :planet-birth="selectedPlanet.created"
          :planet-climate="selectedPlanet.climate"
          :planet-rotation-period="selectedPlanet.rotation_period"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useSearchedPlanetsStore } from "@/store/SearchedPlanets";
import { mapState } from "pinia";
import PlanetComponent from "../PlanetComponent/PlanetComponent.vue";

export default defineComponent({
  name: "PlanetsComponent",
  components: { PlanetComponent },
  data: () => ({
    page: 1,
    selectedPlanet: {
      diameter: 1000,
    },
  }),
  created() {
    useSearchedPlanetsStore().fetchPlanets(`?page=${this.page}`);
  },
  methods: {},
  computed: {
    ...mapState(useSearchedPlanetsStore, ["getPlanets"]),
  },
  watch: {
    page() {
      useSearchedPlanetsStore().fetchPlanets(`?page=${this.page}`);
    },
  },
});
</script>

<style scoped lang="scss" src="./planetsComponent.scss" />
