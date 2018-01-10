<template>
    <div class="sv-modal" :class="[{'active': value, 'fullscreen': fullscreen}, className]">
        <div class="modal-dashboard" @click.stop="hide"></div>
        <div class="modal-body" :class="{'default': isDefault && !fullscreen}">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  props: {
    value: Boolean,

    isDefault: {
      type: Boolean,
      default: true
    },

    className: String,

    fullscreen: Boolean
  },

  data() {
    return {
      isMobile: true
    }
  },

  watch: {
    value: function(val) {
      document.body.style.overflow = val ? "hidden" : "auto";
    }
  },

  methods: {
    hide() {
      this.$emit("input", false);
    }
  }
};
</script>
<style scoped>
.sv-modal {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  position: fixed;
}
.sv-modal.is-focus {
  position: absolute;
}
.sv-modal.active {
  z-index: 9999999;
}
.sv-modal.active .fullscreen .modal-body {
  opacity: 1;
  transform: scale(1);
}
.modal-dashboard {
  opacity: 1;
}
.modal-body.default {
  transform: translate(-50%) scale(1);
}
.sv-modal.fullscreen .modal-body {
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  background-color: #ffffff;
  transition: transform ease 0.3s, opacity ease 0.5s;
}
.modal-dashboard {
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.3);
  transition: opacity ease 0.5s;
}
.sv-modal.active .modal-dashboard  {
    opacity: 1;
}
.modal-body {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.modal-body.default {
  top: 25%;
  left: 50%;
  width: 50%;
  max-width: 614px;
  min-height: 342px;
  border-radius: 6px;
  background-color: #ffffff;
  transform: translate(-50%) scale(0);
  transition: transform ease 0.3s;
}
@media (max-width: 768px) {
  .sv-modal .modal-body.default {
    width: 320px;
  }
}
</style>
