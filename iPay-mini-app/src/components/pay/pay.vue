<template>
  <div class="wrap" v-if="payType.length > 0 && payNum.length >0">
    <div class="phone">
      <div class="phone-wrap">
        <span class="phone-header" v-if="isArea">+60</span>
        <input type="number" class="phone-input" :maxlength="11" :value="value"
               @input="$emit('input', $event.target.value)" ref="input"/>
        <img src="../../assets/icon_contacts.png" class="phone-contacts" @click="historyMode">
      </div>
      <div class="module-wrapper">
        <!--服务商模块-->
        <div class="brands-wrapper">
          <div class="brand-img-wrapper" v-for="(item,index) in payType" @click="selectBrands(item,index)"
               :class="{'active': brandIndex === index}">
            <img :src="item.imgUrl" class="brand-img">
          </div>
        </div>
        <!--价格模块-->
        <div class="price-wrap">
          <div class="price-item" v-for="(item,index) in payNum" @click="selectPrice(item,index)"
               :class="{'active': priceIndex === index}">
            <div class="price-orgin">{{item.Amount}}RM</div>
            <div class="price-actual">{{item.PayAmount}}RM/{{item.ShowCNYAmount}}CNY</div>
            <div class="select"></div>
          </div>
          <div class="price-item" @click="customPrice" :class="{'active': priceIndex === -2}" v-if="isExtra">
            <input type="number" class="price-input" ref="elseInput" placeholder="其他金额">
          </div>
        </div>
        <button @click="pay">立刻付款</button>
      </div>
    </div>
    <div class="copyright">@2016 IPAY60 版权所有</div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      payType: {
        type: Array,
        default: () => []
      },
      payNum: {
        type: Array,
        default: () => []
      },
      isExtra: {
        type: Boolean,
        default: false
      },
      isArea: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        brandIndex: -1,
        priceIndex: -1,
        brands: null,
        price: null
      };
    },

    methods: {
      historyMode() {
        this.$emit('historyMode');
      },
      selectBrands(item, index) {
        this.brandIndex = index;
        this.brands = Object.assign({}, item);
        this.$emit("selectBrands", item);
      },
      selectPrice(item, index) {
        this.priceIndex = index;
        this.price = Object.assign({}, item);
        this.$emit("selectPrice", item);
      },
      customPrice() {
        this.priceIndex = -2;
        this.price = null;
        this.$emit("customPrice");
      },
      pay() {
        let value = {
          phone: this.$refs.input.value.trim(),
          brands: this.brands,
          price: this.price,
          elsePrice: this.$refs.elseInput ? this.$refs.elseInput.value.trim() : ''
        }
        this.$emit("pay", value);
      }
    }
  };
</script>
<style scoped>
  .banner {
    width: 100%;
  }

  .phone {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .phone-wrap {
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 12px;
    margin-right: 12px;
    padding: 10px;
    height: 32px;
    border-radius: 40px;
    box-shadow: 0 1px 1px 1px #e0e7fe;
    font-size: 24px;
    background: #fff;
    z-index: 2000;
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
    opacity: 0.3;
  }

  .brand-img-wrapper.active {
    opacity: 1;
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
    width: 100%;
  }

  .select {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 0 0 3px 0;
    border: 12px solid transparent;
    border-bottom-color: #2f88ff;
    border-right-color: #2f88ff;
  }

  .price-input {
    width: 90%;
    font-size: 16px;
    display: border-box;
    padding-bottom: 5px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #cfcfcf;

    outline: none;
  }

  .price-item.active {
    border-color: #2f88ff;
    color: #2f88ff;
  }

  .price-item.active > .select,
  .price-item.active > .select-mark {
    display: block;
  }

  button {
    border: none;
    background: #2f88ff;
    height: 40px;
    border-radius: 20px;
    font-size: 20px;
    color: #fff;
    outline: none;
  }

  .copyright {
    text-align: center;
    font-size: 12px;
    color: #797979;
  }
</style>


