<template>
  <div id='app'>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      value: ''
    }
  },
  created() {
    console.log(this.value, 'value')
  }
}
</script>
<style lang='scss'>
  #app{
    .app-box{
      width: 100px;
      height: 100px;
      background-color: yellow;
    }
  }
</style>
