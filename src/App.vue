<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/user-info">About</router-link>
      <router-view/>
    </div>
    <!-- <keep-alive>
            <router-view class="view" v-if="$route.meta.keepAlive" />
        </keep-alive>
    <router-view class="view" v-if="!$route.meta.keepAlive" />-->
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
}
</style>
