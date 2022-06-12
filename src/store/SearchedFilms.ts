import { defineStore } from "pinia";
import { FilmsModelResults } from "@/models/FilmsModel";
import axios from "axios";

export const useSearchedFilmsStore = defineStore({
  id: "searchedFilms",
  state: () => ({
    films: [] as FilmsModelResults[],
  }),
  getters: {
    getFilms(state) {
      return state.films;
    },
  },
  actions: {
    async fetchFilms() {
      try {
        const filmsData = await axios.get(`https://swapi.dev/api/films/`);
        this.films = filmsData.data.results;
        this.filterById();
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    filterById() {
      const sortedFilms = this.films as FilmsModelResults[];
      sortedFilms.sort((a, b) => {
        return a.episode_id - b.episode_id;
      });
      this.films = sortedFilms;
    },
    filterByReleaseDate() {
      const sortedFilms = this.films as FilmsModelResults[];
      sortedFilms.sort((a, b) => {
        return (
          parseInt(b.release_date.replace("-", "")) -
          parseInt(a.release_date.replace("-", ""))
        );
      });
      this.films = sortedFilms;
    },
  },
});
