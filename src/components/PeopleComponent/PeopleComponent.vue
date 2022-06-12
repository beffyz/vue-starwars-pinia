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
              :disabled="this.page === 1"
              @click="this.page--"
            >
              {{ "<" }}
            </button>
            <button
              class="people-section__move-button"
              :disabled="this.page === 9"
              @click="this.page++"
            >
              {{ ">" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { useSearchedPeopleStore } from "@/store/SearchedPeople";
import { defineComponent } from "vue";
import { mapState } from "pinia";

export default defineComponent({
  name: "PeopleComponent",
  data: () => ({
    page: 1,
    inputValue: "",
  }),
  created() {
    useSearchedPeopleStore().fetchPeople(`?page=${this.page}`);
  },
  methods: {
    searchPersonByName(name: string) {
      useSearchedPeopleStore().fetchPeople(`?search=${name}`);
    },
  },
  computed: {
    ...mapState(useSearchedPeopleStore, ["getPeople"]),
  },
  watch: {
    page() {
      useSearchedPeopleStore().fetchPeople(`?page=${this.page}`);
    },
  },
});
</script>

<style scoped lang="scss" src="./peopleComponent.scss" />
