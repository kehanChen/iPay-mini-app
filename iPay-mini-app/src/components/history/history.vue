<template>
  <div class="container bg-grey">
  <div class="section-title">订单详情</div>
  <div class="history-wrapper">
    <div v-for="item in $store.state.historys">
      <div class="history-item">
        <div class="item-header">
          <img src="../../assets/clock.png" class="item-icon">
          <span class="bill-date">{{item.Date}}</span>
          <span class="bill-no">商户单号: {{item.ID}}</span>
        </div>
        <div class="item-content">
          <div class="item-column">
            <span class="item-title">手机号码</span>
            <span class="item-info">{{item.Phone}}</span>
          </div>
          <div class="item-column">
            <span class="item-title">金额</span>
            <span class="item-info">{{item.PayAmount}}</span>
          </div>
          <div class="item-column">
            <span class="item-title">状态</span>
            <span class="bill-status">{{item.Status}}</span>
          </div>
          <!-- <div class="item-column" bindtap="download" data-url="{{item.Pdf}}"> -->
          <div class="item-column">          
            <span class="item-title">收据</span>
            <span class="item-info blue">查看</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { getHistory } from '@/api/getHistory';
export default {
  created () {
    getHistory().then(res => {
      this.$store.commit('updateHistorys', res);
    })
  }
}
</script>
<style scoped>
.section-title {
  font-size: 15px;
  color: #1e1e1f;
  padding-top: 15px;
  padding-bottom: 18px;
  text-align: center;
}

.bg-grey {
  background: #efeff2;
  padding: 0;
}

.history-wrapper {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  background: #fff;
}

.history-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  margin-top: 8px;
}

.item-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  line-height: 12px;
  color: #2b2b2b;
  height: 28px;
}

.bill-date {
  flex: 1;
  color: #f3c074;
}

.blue {
  color: #3399ff;
  text-decoration: underline;
}

.item-icon {
  height: 12px;
  width: 12px;
  margin-top: -1px;
  margin-right: 5px;
}

.item-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  box-shadow: 1px 1px 2px 2px #e0e7fe;
  border-radius: 8px;
}

.item-column {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #2b2b2b;
  text-align: center;
}

.item-column:first-child {
  width: 100px;
}

.item-column:not(:first-child) {
  width: 80px;
}

.item-title {
  color: #a4a4a4;
  padding-bottom: 10px;
}


.bill-status {
  color: #f3c074;
}
</style>

