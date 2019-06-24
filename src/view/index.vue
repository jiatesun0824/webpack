<template>
  <div class="index" @click="routerToCase">
    我是index
    <div class="index-image"><img src="/static/image/1212.png" alt=""></div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {
    routerToCase() {
      this.$router.push({path: '/case'})
    }
  }
}
</script>
<style lang='scss'>

</style>

