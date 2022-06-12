<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-8 center-md">
          <h1>APP</h1>
        </div>
        <div class="col-md-4">
          <div class="header__navigation">
            <nav class="header__navigation--link center-md">
              <router-link to="/">HOME</router-link>
              <router-link to="/people">PEOPLE</router-link>
              <router-link to="/films">FILMS</router-link>
              <router-link to="/planets">PLANETS</router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "StarWardsHeader",
};
</script>

<style lang="scss" src="./starWarsHeader.scss" />
