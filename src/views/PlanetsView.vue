<template>
  <section>
    <PlanetsComponent />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlanetsComponent from "../components/PlanetsComponent/PlanetsComponent.vue";

export default defineComponent({
  name: "PlanetsView",
  components: { PlanetsComponent },
});
</script>

<style scoped></style>
