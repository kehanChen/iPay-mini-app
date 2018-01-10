<template>
  <section class="ui-phone">
      <ad :data="$store.state.ad" :text="$store.state.broadcast[0]"></ad>
      <pay :payType="$store.state.brandsPhone" :payNum="$store.state.pricePhone" @selectBrands="selectBrands" @pay="pay"></pay>
      <sv-mark  v-model="isShow">
        <template slot="body">
                <div class="modal-body-wrap">
                    <div class="content">
                        <div class="text">
                            如需修改基本信息（真实姓名、所在机构、职位），请重新提交身份认证。
                        </div>
                    </div>
                    <div class="btn">
                        <button class="sv-btn consider" @click="changeAuth = false">我知道了</button>
                    </div>
                </div>
            </template>
      </sv-mark>
  </section>
</template>

<script>
import { getImagePhone, getPricePhone } from '@/api/payByPhone';
import Ad from '@/components/ad/ad.vue'
import Pay from '@/components/pay/pay.vue'
import Mark from '@/components/mark/mark.vue'
export default {
  data() {
    return {
      isShow: true
    }
  },
  mounted() {
    getImagePhone().then(res => {
       this.$store.commit('updateBrandsPhone', res);
    });
    getPricePhone().then(res => {
       this.$store.commit('updatePricePhone', res);
    });
  },
  components: {
    Ad,
    Pay,
    'sv-mark': Mark
  },
  methods: {
    selectBrands(val) {
      
    },
    pay(val) {
      console.log(val);
      this.$notify.success('成功');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
