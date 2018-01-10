<template>
  <section class="ui-else">
    <ad :data="$store.state.ad" :text="$store.state.broadcast[0]"></ad>
    <pay :payType="$store.state.brandsElse"
         :payNum="$store.state.priceElse"
         :isArea="false" :isExtra="true"
         @pay="pay"
         @historyMode="ishistoryMode = true"
         v-model="num"></pay>
    <sv-mark v-model="isShow" class="pay-alert">
      <template slot="body">
        <div class="modal-body-wrap">
          <h3>还不能支付</h3>
          <h4>{{message}}</h4>
          <div class="sure" @click="isShow = false">好的</div>
        </div>
      </template>
    </sv-mark>
    <sv-mark v-model="ishistoryMode" class="history">
      <template slot="body">
        <div class="modal-body-wrap">
          <h3>常用联系人</h3>
          <ul class="content">
            <li class="text" v-for="(item,index) in historyElse">
              <span @click.stop="chooseHistory(item)">{{item}}</span>
              <span @click.stop="delHistory(index)">删除</span>
            </li>
          </ul>
        </div>
      </template>
    </sv-mark>
  </section>
</template>

<script>
  import {getImageElse, getPriceElse} from '@/api/payByElse';
  import {doReload} from '@/api/order';
  import Ad from '@/components/ad/ad.vue';
  import Pay from '@/components/pay/pay.vue';
  import Mark from '@/components/mark/mark.vue';

  export default {
    data() {
      return {
        num: '',
        message: '',
        isShow: false,
        ishistoryMode: false,
        historyElse: localStorage.getItem('historyElse') ? JSON.parse(localStorage.getItem('historyElse')) : []
      }
    },
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
      Pay,
      'sv-mark': Mark
    },
    methods: {
      chooseHistory(item) {
        this.phone = item;
        this.isShow = false;
      },
      delHistory(index) {
        this.historyElse.splice(index, 1);
        localStorage.setItem('ishistoryMode', JSON.stringify(this.historyElse))
      },
      pay(val) {
        // elsePrice
        console.log(val,val.price || val.elsePrice);
        if (!(val.phone && val.brands && (val.price || val.elsePrice))) {
          this.isShow = true;
          this.message = '请输入完整的信息';
          return;
        }
        let data = {
          amount: val.price ? val.price.Amount : val.elsePrice,
          brand: val.brands.id,
          phone: val.phone,
          way: 'weChatPay',
          openid: ''
        }
        doReload(data).then(res => {
          this.historyElse = [
            ...new Set([
              ...this.historyElse,
              val.phone
            ])
          ]
          localStorage.setItem('historyElse', JSON.stringify(this.historyElse))
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .ui-else .phone-header {
    display: none;
  }

  .ui-else .phone-input {
    padding-left: 20px;
  }
  .ui-else .pay-alert h4 {
    font-weight: normal;
    color: rgba(51, 51, 51, .5);

  }

  .ui-else .pay-alert .sure {
    border-top: 1px solid #eaeaea;
    font-size: 16px;
    line-height: 40px;
    color: rgba(0, 200, 0, .7);
  }

  .ui-else .history ul {
    list-style: none;
    padding: 0 30px;
    font-size: 16px;
    line-height: 40px;
  }

  .ui-else .history li:after {
    display: block;
    content: "";
    clear: both;
  }

  .ui-else .history li {
    border-bottom: 1px solid #eaeaea;
  }

  .ui-else .history li > span:nth-of-type(1) {
    float: left;
  }

  .ui-else .history li > span:nth-of-type(2) {
    float: right;
    color: rgba(51, 51, 51, .5);
  }
</style>
