<template>
  <section>
    <PeopleComponent />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PeopleComponent from "../components/PeopleComponent/PeopleComponent.vue";
export default defineComponent({
  name: "PeopleView",
  components: { PeopleComponent },
});
</script>

<style scoped></style>
