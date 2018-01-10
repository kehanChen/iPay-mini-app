<template>
  <section class="ui-else">
    <ad :data="$store.state.ad" :text="$store.state.broadcast[0]"></ad>
    <pay :payType="$store.state.brandsElse" :payNum="$store.state.priceElse" :isArea="false" :isExtra="true" @pay="pay"></pay>
  </section>
</template>

<script>
import { getImageElse, getPriceElse } from '@/api/payByElse';
import Ad from '@/components/ad/ad.vue';
import Pay from '@/components/pay/pay.vue';
export default {
 
  mounted() {
    
    getImageElse().then(res => {
        this.$store.commit('updateBrandsElset', res);
    });
    getPriceElse().then(res => {
        this.$store.commit('updatePriceElse', res);
    });
    
  },
  components: {
    Ad,
    Pay
  },
  methods: {
    pay(val) {
      console.log(val);
      this.$notify.success('成功');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.ui-else .phone-header{
  display: none;
}
.ui-else .phone-input{
  padding-left: 20px;
}
</style>
