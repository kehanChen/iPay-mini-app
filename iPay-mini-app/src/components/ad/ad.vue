<template>
  <div class="swiper-wrap">
    <Swiper v-if="data.length > 0"
            :autoPlay='true'
            :showIndicator='true'
            interval="2500"
            duration="500">
      <Slide v-for="(n,key) in data.length" :key="key">
        <img :src="data[n-1]" class="slide-img">
      </Slide>
    </Swiper>
    <div class="welcome"><span class="icon"></span><span>{{text}}</span></div>
  </div>
</template>
<script>
  import {Swiper, Slide} from 'vue-swiper-component';

  export default {
    props: {
      data: {
        type: Array,
        default: () => []
      },
      text: {
        type: String,
        default: ''
      }
    },
    components: {
      Swiper,
      Slide
    }

  }
</script>
<style scoped>

  .swiper-wrap {
    position: relative;
  }

  .slide-img {
    width: 100%;
    vertical-align: top;
  }

  .welcome {
    box-sizing: border-box;
    position: absolute;
    height: 30px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 2000;
    padding: 5px 30px;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
  }

  .welcome span {
    float: left;
  }

  .welcome .icon {
    height: 20px;
    width: 20px;
    margin-right: 30px;
    background: url('../../assets/icon_speaker.png') no-repeat;
    background-size: 100% auto;
  }
</style>

