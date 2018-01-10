<template>
  <div id="app">
    <router-view/>
    <tab></tab>
  </div>
</template>

<script>
  import {getAd, getBroadcast, getRate} from '@/api/banner';
  import Tab from '@/components/tab/tab.vue';

  export default {
    name: 'app',
    components: {
      Tab
    },
    created() {
      getAd().then(res => {
        this.$store.commit('updateAd', res);
      });
      getBroadcast().then(res => {
        this.$store.commit('updateBroadcast', res);
      });
      getRate().then(res => {
        this.$store.commit('updateRate', res);
      });
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 60px;
  }
</style>
