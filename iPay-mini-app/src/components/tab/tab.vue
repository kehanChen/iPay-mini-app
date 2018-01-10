<template>
  <section id="footer">
    <router-link class="phone" to="/">
      <span class="icon"></span>
      <span class="title">手机充值</span>
    </router-link>
    <router-link class="else" to="/else">
      <span class="icon"></span>
      <span class="title">其他充值</span>
    </router-link>
    <router-link class="history" to="/history">
      <span class="icon"></span>
      <span class="title">充值历史</span>
    </router-link>
    <router-link class="help" to="/help">
      <span class="icon"></span>
      <span class="title">客户服务</span>
    </router-link>
  </section>
</template>

<script>

</script>

<style scoped>
  #footer {
    position: fixed;
    border-top: 1px solid #cacaca;
    height: 60px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: #fff;
    z-index: 1000;
  }

  #footer > a {
    height: 100%;
    width: 25%;
    float: left;
    text-align: center;
    font-size: 12px;
    text-decoration: none;
    color: #999999;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  #footer .router-link-exact-active {
    color: #3399ff;
  }

  #footer .icon {

    align-items: center;
    display: inline-block;
    vertical-align: top;
    height: 30px;
    width: 30px;

    background-size: auto 100%;
  }

  #footer .phone .icon {
    background-image: url('../../assets/phone.png');
  }

  #footer .else .icon {
    background-image: url('../../assets/extra.png');
  }

  #footer .history .icon {
    background-image: url('../../assets/history.png');
  }

  #footer .help .icon {
    background-image: url('../../assets/help.png');
  }

  #footer .phone.router-link-exact-active .icon {
    background-image: url('../../assets/phone_selected.png');
  }

  #footer .else.router-link-exact-active .icon {
    background-image: url('../../assets/extra_selected.png');
  }

  #footer .history.router-link-exact-active .icon {
    background-image: url('../../assets/history_selected.png');
  }

  #footer .help.router-link-exact-active .icon {
    background-image: url('../../assets/help_selected.png');
  }

  #footer .title {
    display: block;
  }
</style>
