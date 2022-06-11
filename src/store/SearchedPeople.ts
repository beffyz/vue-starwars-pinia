import { defineStore } from "pinia";
import { PeopleModelResults } from "@/models/PeopleModel";
import axios from "axios";

export const useSearchedPeopleStore = defineStore({
  id: "searchedPeople",
  state: () => ({
    people: [] as PeopleModelResults[],
  }),
  getters: {
    getPeople(state) {
      return state.people;
    },
  },
  actions: {
    async fetchPeople(txt: number) {
      try {
        const peopleData = await axios.get(
          `https://swapi.dev/api/people/${txt}`
        );
        this.people = peopleData.data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
