<template>
  <i :class="classes" @click="clicked"></i>
</template>
<script>
  export default {
    props: ['dir'],
    computed: {
      classes() {
        return 'carousel-control fa fa-2x fa-chevron-' + this.dir;
      }
    },
    methods: {
      clicked() {
        this.$emit('change-image', this.dir === 'left' ? -1 : 1);
      }
    }
  }
</script>
<style>
.carousel-control {
  padding: 1rem;
  color: #ffffff;
  opacity: 0.85;
  transition: all .1s ease-in;
}

.carousel-control:hover {
  opacity: 1;
  transform: scale(1.2);
}

.carousel-control:active {
  transform: scale(1.1);
}

.carousel-control::before {
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
}

@media (min-width: 744px) {
  .carousel-control {
    font-size: 3rem;
  }
}
</style>