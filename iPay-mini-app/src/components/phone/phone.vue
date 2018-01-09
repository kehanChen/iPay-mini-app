<template>
  <section class="ui-phone">
      <img class="banner" :src="$store.state.ad[0]">
      <div class="phone">
        <div class="phone-wrap">
            <span class="phone-header">+60</span>
            <input type="number" class="phone-input" :maxlength="11" />
            <img src="../../assets/icon_contacts.png" class="phone-contacts" />
        </div>
        <div class="module-wrapper">
          <!--服务商模块-->
          <div class="brands-wrapper">
            <div class="brand-img-wrapper" v-for="item in $store.state.brandsPhone">
              <img :src="item.imgUrl" class="brand-img">
            </div>
          </div>
          <!--价格模块-->
          <div class="price-wrap">
            <div class="price-item" v-for="item in $store.state.pricePhone">
                <div class="price-orgin">{{item.Amount}}RM</div>
                <div class="price-actual">{{item.PayAmount}}RM/{{item.ShowCNYAmount}}CNY</div>
                <div class="select"></div>
                <div class="select-mark"></div>
            </div>
          </div>
          <button>立刻付款</button>
        </div>
      </div>
      <div class="copyright">@2016 IPAY60 版权所有</div>

  </section>
</template>

<script>
import { getAd, getBroadcast, getRate } from '@/api/banner';
import { getImagePhone, getPricePhone } from '@/api/payByPhone';

export default {


  mounted() {
    getAd().then(res => {
        this.$store.commit('updateAd', res);
    });
    getBroadcast().then(res => {
       this.$store.commit('updateBroadcast', res);
    });
    getRate().then(res => {
      this.$store.commit('updateRate', res);
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
.banner {
  width: 100%;
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
  padding: 10px;
  height:32px;
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
  border: none;
  font-size: 24px;
  outline: none;
  max-width: 150px;
}
.phone-contacts {
  height: 24px;
  width: 24px;
  position: absolute;
  right: 10px;
  top: 14px;
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
.price-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.price-item {
  display: flex;
  position: relative;
  width: 47%;
  height: 60px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  color: #797979;
  border: 1px solid #cfcfcf;
}
.price-orgin {
  font-size: 14px;
  line-height: 1.5;
}
.price-actual {
  font-size: 12px;
}
.select {
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 24px;
  width: 24px;
  border-radius: 0 0 3px 0;
  background: #2f88ff;
}
.select-mark {
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  border: 12px solid transparent;
  border-top-color: #fff;
  border-left-color: #fff;
}
.price-item.active {
  border-color: #2f88ff;
  color: #2f88ff;
}
.price-item.active .select,.select-mark  {
    display: block;
}
button {
  border: none;
  background: #2f88ff;
  height: 40px;
  border-radius: 20px;
  font-size: 20px;
  color: #fff;
}
.copyright {
  text-align: center;
  font-size: 12px;
  color: #797979;
}
</style>
