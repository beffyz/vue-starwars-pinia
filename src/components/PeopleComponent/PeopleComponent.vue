<template>
  <section class="people-section">
    <div class="container">
      <div class="row">
        <div class="col-md-12 center-md">
          <div class="people-section__search">
            <h2 class="people-section__search--title">SEARCH PERSON</h2>
            <input
              class="people-section__search--input"
              @keydown="searchPersonByName(inputValue)"
              v-model="inputValue"
              placeholder="Enter name..."
              type="text"
            />
          </div>
          <div
            class="people-section__card"
            v-for="person in getPeople"
            :key="person.name"
          >
            {{ person.name }}
          </div>
          <div class="people-section__move-box">
            <button
              class="people-section__move-button"
              :disabled="this.txt === 1"
              @click="this.txt--"
            >
              {{ "<" }}
            </button>
            <button class="people-section__move-button" @click="this.txt++">
              {{ ">" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useSearchedPeopleStore } from "@/store/SearchedPeople";
import { defineComponent } from "vue";
import { mapState } from "pinia";

export default defineComponent({
  name: "PeopleComponent",
  data: () => ({
    txt: 1,
    inputValue: "",
  }),
  created() {
    useSearchedPeopleStore().fetchPeople(`?page=${this.txt}`);
  },
  methods: {
    searchPersonByName(name) {
      useSearchedPeopleStore().fetchPeople(`?search=${name}`);
    },
  },
  computed: {
    ...mapState(useSearchedPeopleStore, ["getPeople", "getPageDetails"]),
  },
  watch: {
    txt() {
      useSearchedPeopleStore().fetchPeople(`?page=${this.txt}`);
    },
  },
});
</script>

<style scoped lang="scss" src="./peopleComponent.scss" />
