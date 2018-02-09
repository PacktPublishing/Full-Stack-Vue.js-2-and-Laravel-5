<template>
  <div id="modal" :class="{ show: modalOpen }">
    <button @click="modalOpen = false" class="modal-close">&times;</button>
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modalOpen: false
    }
  },
  methods: {
    escapeKeyListener(evt) {
      if (evt.keyCode === 27 && this.modalOpen) {
        this.modalOpen = false;
      }
    }
  },
  watch: {
    modalOpen: function() {
      var className = 'modal-open';
      if (this.modalOpen) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  created: function() {
    document.addEventListener('keyup', this.escapeKeyListener);
  },
  destroyed: function() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
}
</script>

<style lang="css">
#modal {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .85);
  z-index: 2000;
}

#modal.show {
  display: block;
}

.modal-content {
  position: relative;
  height: 100%;
  max-width: 105vh;
  margin: 0 auto;
  padding-top: 12vh;
}

.modal-close {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  padding: 0px 28px 8px;
  font-size: 4em;
  font-weight: 100;
  background: transparent;
  border: 0;
  outline: none;
  color: #ffffff;
  z-index: 1000;
  line-height: 1;  
  transition: all .1s ease-in;
}

.modal-close:hover {
  transform: scale(1.2);
}

.modal-close:active {
  transform: scale(1.1);
}
</style>