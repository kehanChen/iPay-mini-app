<template>
  <div class="container">
  <div class="help-part" v-for="item in operation">
    <div class="help-header">
        <img class="help-icon" src="../../assets/icon_file.png" >
        <span class="help-title">{{item.title}}</span>
    </div>
    <span class="help-info">{{item.text}}</span>
  </div>
  <ul class="help-part">
    <li class="help-header">
        <img class="help-icon" src="../../assets/icon_file.png" >
        <span class="help-title">常见问题</span>
    </li>
    <li class="faq-item" v-for="item in questions">
      <div class="quz">{{item.question}}</div>
      <div class="ans">{{item.reject}}</div>
    </li>
  </ul>
  <img class="contact" src="../../assets/wechat.png">

</div>
</template>
<script>
export default {
  data() {
    return {
      operation: [
        {
          title: 'HOT_LINK',
          text: '查询话费余额及有效期 : *122# \n开通流量套餐 : *100# \n更换中文服务 : *122*3# '
        },{
          title: 'DIGI',
          text: '查询话费余额及有效期 : *126# \n开通流量套餐 : *116# \n更换中文服务 : *128*1*1# '
        },{
          title: 'Celcom',
          text: '查询话费余额及有效期 : *124# \n开通流量套餐 : *118# '
        },{
          title: 'Umobile',
          text: '查询话费余额及有效期 : *118# \n开通流量套餐 : *118*3*1*1#  \n查看流量使用情况 : *118*3*1*3# '
        }
      ],
      questions: [
        {
          question: '充值5RM，实际到账确4.8？',
          reject: '马来西亚政府征收6%消费税，是由电讯公司设定充值时扣除。'
        },{
          question: '充值多久能到？',
          reject: '完成订单后耐心等待，1-10分钟系统自动充值。'
        },{
          question: '是否有手续费？',
          reject: '没有任何手续费。'
        },{
          question: '人民币汇率如何换算？',
          reject: '人民币实时汇率每小时更新。'
        },{
          question: '充值服务是什么时候开放？',
          reject: '7*24小时随时随地可充。'
        },{
          question: '为什么我的号码和品牌都没错，但是无法充值？',
          reject: '如果您是后付费用户我们在新版本才能支持，否则请您联系我们的客服。'
        },{
          question: '出现意外问题退款会在哪里？',
          reject: '我们会退款到您付款的微信支付账号中，留意您的微信。'
        },{
          question: '如果填写错误的品牌或号码怎么办？',
          reject: '若是手机号码为空号我们会自动退款，退款时间需1-3个工作日。'
        }
      ]
    }
  }
}
</script>
<style scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
.help-part {
  color: #3C763D;
  background: #D6E9C6;
  padding: 16px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.help-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid #cacaca;
}

.help-icon {
  width: 15px;
  height: 15px;
}

.help-title {
  display: block;
  font-size: 18px;
  padding-left: 8px;
  line-height: 20px;
}

.help-info {
  display: block;
  font-size: 14px;
  padding-left: 8px;
  text-align: left;
}

ul {
  list-style: none;
}

.faq-item {
  font-size: 14px;
  margin-bottom: 8px;
}

.quz {
  padding-bottom: 2px;
  text-align: left;
}

.quz::before {
  content: '·';
  display: inline-block;
  font-weight: 500;
  width: 15px;
}

.ans {
  padding-left: 15px;
  text-align: left;
}
.contact {
  position: fixed;
  bottom: 80px;
  right: 20px;
  height: 40px;
  width: 40ppx;
  background: #3C763D;
  border-radius: 100%;
}
</style>

