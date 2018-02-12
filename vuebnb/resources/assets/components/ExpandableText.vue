<template>
  <div>
    <p :class="{ 'm-opened': opened }">
      <slot></slot>
    </p>
    <button class="more" v-if="!opened" @click="opened = true">+ More</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      opened: false
    }
  }
}
</script>

<style lang="css">
.about p {
  white-space: pre-wrap;
  max-height: 250px;
  overflow: hidden;
  transition: all 4s ease-out;
}

.about p.m-opened {
  max-height: 2000px;
}

button {
  text-align: center;
  vertical-align: middle;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0;
}
  
.about button.more {
  background: transparent;
  border: 0;
  color: #008489;
  padding: 0;
  font-size: 17px;
  font-weight: bold;
}

.about button.more:hover,
.about button.more:active,
.about button.more:focus {
  text-decoration: underline;
  outline: none;
}
</style>
