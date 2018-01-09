<template>
  <section class="ui-phone">
      <div class="phone">
        <div class="phone-wrap">
            <span class="phone-header">+60</span>
            <input type="number" class="phone-input" :maxlength="11" />
            <img src="../../assets/icon_contacts.png" class="phone-contacts" />
        </div>
        <div class="module-wrapper">
          <div class="brands-wrapper">
            <div class="brand-img-wrapper" v-for="item in $store.state.brandsPhone">
              <img :src="item.imgUrl" class="brand-img">
            </div>
          </div>
        </div>
      </div>
      
  </section>
</template>

<script>
import { getAd, getBroadcast } from '@/api/banner'
import { getImagePhone, getPricePhone } from '@/api/payByPhone'

export default {
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    getAd().then(res => {
        this.$store.commit('updateAd', res);
    });
    getBroadcast().then(res => {
       this.$store.commit('updateBroadcast', res);
    });
    getImagePhone().then(res => {
       this.$store.commit('updateBrandsPhone', res);
    });
    getPricePhone().then(res => {
       this.$store.commit('updatePricePhone', res);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui-phone {

}
.phone  {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.phone-wrap {
  display:flex;
  align-items:center;
  position:relative;
  margin-left:12px;
  margin-right:12px;
  padding-left:25px;
  padding-right:25px;
  padding-top:10px;
  padding-bottom:10px;
  height:65rpx;
  border-radius:40px;
  box-shadow:0 1px 1px 1px #e0e7fe;
  font-size:24px;
  background:#fff;
  z-index:2000;
}
.phone-header {
  display: flex;
  height: 100%;
  align-items: center;
  line-height: 25px;
  color: #8498ff;
  padding-right: 10px;
  margin-right: 12px;
  border-right: 2px solid #8497ff;
}

.phone-input {
  flex: 1;
  padding-right: 10px;
}
.phone-contacts {
  height: 25px;
  width: 25px;
}
.module-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: -18px;
  background: #fff;
  z-index: 1;
  padding: 10px;
  padding-top: 33px;
}
.brands-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.brand-img-wrapper {
  width: 25%;
  height: 50px;
  margin-bottom: 10px;
  opacity: .3;
}
.brand-img {
  width: 55px;
  height: 45px;
}
</style>
