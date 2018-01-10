<template>
  <section class="ui-phone">
    <ad :data="$store.state.ad" :text="$store.state.broadcast[0]"></ad>
    <pay :payType="$store.state.brandsPhone"
         :payNum="$store.state.pricePhone"

         @pay="pay" @historyMode="ishistoryMode = true"
         v-model="phone"></pay>
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
            <li class="text" v-for="(item,index) in historyPhone">
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
  import {getImagePhone, getPricePhone} from '@/api/payByPhone';
  import {doReload} from '@/api/order';
  import Ad from '@/components/ad/ad.vue';
  import Pay from '@/components/pay/pay.vue';
  import Mark from '@/components/mark/mark.vue';

  export default {
    data() {
      return {
        isShow: false,
        ishistoryMode: false,
        phone: '',
        message: '',
        historyPhone: localStorage.getItem('historyPhone') ? JSON.parse(localStorage.getItem('historyPhone')) : []
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
      chooseHistory(item) {
        this.phone = item;
        this.isShow = false;
      },
      delHistory(index) {
        this.historyPhone.splice(index, 1);
        localStorage.setItem('historyPhone', JSON.stringify(this.historyPhone))
      },
      pay(val) {

        console.log(val);
        if (!val.phone || !val.brands || !val.price) {
          this.isShow = true;
          this.message = '请输入完整的信息';
          return;
        }
        let data = {
          amount: val.price.Amount,
          brand: val.brands.id,
          phone: val.phone,
          way: 'weChatPay',
          openid: ''
        }
        doReload(data).then(res => {
          this.historyPhone = [
            ...new Set([
              ...this.historyPhone,
              val.phone
            ])
          ]
          console.log(this.historyPhone)
          localStorage.setItem('historyPhone', JSON.stringify(this.historyPhone));

        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ui-phone .pay-alert h4 {
    font-weight: normal;
    color: rgba(51, 51, 51, .5);

  }

  .ui-phone .pay-alert .sure {
    border-top: 1px solid #eaeaea;
    font-size: 16px;
    line-height: 40px;
    color: rgba(0, 200, 0, .7);
  }

  .ui-phone .history ul {
    list-style: none;
    padding: 0 30px;
    font-size: 16px;
    line-height: 40px;
  }

  .ui-phone .history li:after {
    display: block;
    content: "";
    clear: both;
  }

  .ui-phone .history li {
    border-bottom: 1px solid #eaeaea;
  }

  .ui-phone .history li > span:nth-of-type(1) {
    float: left;
  }

  .ui-phone .history li > span:nth-of-type(2) {
    float: right;
    color: rgba(51, 51, 51, .5);
  }
</style>
