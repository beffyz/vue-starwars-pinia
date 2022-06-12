<template>
  <section class="planet-section">
    <div class="planet__details center-md">
      <h1 class="planet__name">{{ planetName }}</h1>
      <p><b>Planet Terrain:</b> {{ planetTerrain }}</p>
      <p>
        <b>Population:</b>
        <span v-for="index in getPopulationIndicator()" :key="index"> * </span>
      </p>
      <p><b>Climate:</b> {{ planetClimate }}</p>
      <p><b>Rotation Period:</b> {{ planetRotationPeriod }}</p>
      <p><b>Created at:</b> {{ planetBirth }}</p>
    </div>
    <div class="planet__details--box"></div>
    <div class="planet">
      <div
        class="planet-image"
        :style="
          planetWidth +
          ';' +
          planetHeight +
          ';' +
          getPlanetBackground() +
          ';' +
          getPlanetWater()
        "
      ></div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlanetComponent",
  props: {
    planetWidth: String,
    planetHeight: String,
    planetBackground: String,
    planetPopulation: Number,
    planetWater: String,
    planetName: String,
    planetRotationPeriod: String,
    planetClimate: String,
    planetTerrain: String,
    planetBirth: String,
  },
  methods: {
    getPlanetBackground() {
      switch (this.planetBackground) {
        case "desert":
          return "background:orange";
        case "grasslands, mountains":
          return "background:green";
        case "jungle, rainforests":
          return "background:darkgreen";
        case "tundra, ice caves, mountain ranges":
          return "background:lightblue";
        case "swamp, jungles":
          return "background:lightgreen";
        case "gas giant":
          return "background:lightgrey";
        case "forests, mountains, lakes":
          return "background:green";
        case "grassy hills, swamps, forests, mountains":
          return "background:brown";
        default:
          return "background:white";
      }
    },
    getPopulationIndicator() {
      if (isNaN(this.planetPopulation)) {
        return 0;
      }
      if (this.planetPopulation > 1000000) {
        return 5;
      } else if (
        this.planetPopulation < 1000000 &&
        this.planetPopulation > 500000
      ) {
        return 4;
      } else if (
        this.planetPopulation < 500000 &&
        this.planetPopulation > 250000
      ) {
        return 3;
      } else if (
        this.planetPopulation < 250000 &&
        this.planetPopulation > 125000
      ) {
        return 2;
      } else if (this.planetPopulation < 125000) {
        return 1;
      }
    },
    getPlanetWater() {
      if (this.planetWater === "100") {
        return "border: 10px solid blue";
      }
      if (parseInt(this.planetWater) < 10) {
        return "border: 2px dashed blue";
      }
      if (this.planetWater !== "100") {
        return "border:" + parseInt(this.planetWater) / 3 + "px dashed blue";
      }
    },
  },
});
</script>

<style scoped>
.planet-section {
  margin-top: 200px;
}

.planet__name {
  font-family: starwars;
  font-size: 22px;
  color: gold;
}

.planet__details {
  color: white;
}

.planet {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  max-height: 1000px;
  height: 100%;
}

.planet-image {
  margin-top: 30px;
  border-radius: 50%;
  max-width: 500px;
  max-height: 500px;
  box-sizing: border-box;
}
</style>
