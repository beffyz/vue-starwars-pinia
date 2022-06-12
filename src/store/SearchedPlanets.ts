import { defineStore } from "pinia";
import { PlanetsModelResults } from "@/models/PlanetsModel";
import axios from "axios";

export const useSearchedPlanetsStore = defineStore({
  id: "searchedPlanets",
  state: () => ({
    planets: [] as PlanetsModelResults[],
  }),
  getters: {
    getPlanets(state) {
      return state.planets;
    },
  },
  actions: {
    async fetchPlanets(page: number | string) {
      try {
        const planetsData = await axios.get(
          `https://swapi.dev/api/planets/${page}`
        );
        this.planets = planetsData.data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
