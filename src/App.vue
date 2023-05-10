<template>
  <div class="container">
    <mt-header fixed :title="$route.meta.title"></mt-header>
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from './components/tabbar.vue'

  export default {
    // name: 'App',
    components: {
      tabbar
    }
  }
</script>

<style lang="scss" scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
  }
  .container {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
</style>
