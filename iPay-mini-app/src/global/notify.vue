<template>
    <div class="ui-notify-item" :class="{'active': isShow}">
        <section class="close" @click="close">×</section>
        <div class="notify-body">
            <!-- <i :class="'icon icon-notify-' + type + ' ' + type"></i> -->
            <div class="notify-content">{{content}}</div>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  name: "notify",

  data() {
    return {
      type: "",
      content: "",
      isShow: false,
      duration: 3000
    };
  },

  mounted() {
    setTimeout(() => {
      this.isShow = true;

      setTimeout(() => {
        this.close();
      }, this.duration);
    }, 50);
  },

  methods: {
    close() {
      this.isShow = false;
      setTimeout(() => {
        this.$destroy();
      }, 500);
    }
  },

  destroyed() {
    let parentEle = document.getElementById("sv-notify");
    parentEle && parentEle.removeChild(this.$el);
  }
};
</script>
<style>

#sv-notify {
  top: 15px;
  right: 15px;
  position: fixed;
  z-index: 999999999;
}
.ui-notify-item {
  opacity: 0;
  right: -330px;
  width: 330px;
  padding: 20px;
  height: 100px;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  transition: opacity ease 0.5s, right ease 0.5s;
}
.ui-notify-item.active {
  right: 0;
  opacity: 1;
}
.notify-body:after {
  content: "";
  display: block;
  clear: both;
}
#sv-notify .icon {
  float: left;
  line-height: 1;
  font-size: 25px;
}
.icon.success {
  color: #13ce66;
}
.icon.info {
  color: #50bfff;
}

.icon.warning {
  color: #f7ba2a;
}

.icon.error {
  color: #ff4949;
}
.notify-content {
  padding: 0;
  font-size: 16px;
  line-height: 1.6;
  margin-left: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.close {
  top: 0;
  right: 15px;
  cursor: pointer;
  font-size: 22px;
  position: absolute;
  color: rgba(51, 51, 51, 0.4);
  transition: color ease 0.3s;
}
.close:hover {
  color: rgba(51, 51, 51, 0.8);
}

@media (max-width: 414px) {
  #sv-notify {
    top: 10px;
    right: 10px;
  }
  .ui-notify-item {
    width: 200px;
    right: -200px;
    height: 70px;
    padding: 12px;
    margin: 12px 0;
  }

  #sv-notify .icon {
    font-size: 16px;
  }

  .notify-content {
    font-size: 14px;
    line-height: 1.4;
    margin-left: 30px;
  }

  .close {
    right: 10px;
    font-size: 12px;
  }
}
</style>
